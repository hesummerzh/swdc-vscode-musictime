import { commands } from "vscode";
import { getCurrentColorKind } from "../extension";
import { getItem } from "../managers/FileManager";
import {
  getCachedLikedSongsTracks,
  getCachedPlaylistTracks,
  getCachedRecommendationInfo,
  getCachedRunningTrack,
  getCachedSoftwareTop40Playlist,
  getPlayerContext,
  getCachedSpotifyPlaylists,
  getUserMusicMetrics,
  getDeviceMenuInfo,
  getSelectedPlaylistId,
  getSelectedTabView,
  getSpotifyLikedPlaylist,
  isLikedSong,
  getUserMetricsSelected,
} from "../managers/PlaylistDataManager";
import { getSlackWorkspaces, hasSlackWorkspaces } from "../managers/SlackManager";
import { getConnectedSpotifyUser } from "../managers/SpotifyManager";
import { isCodeTimeTimeInstalled } from "../Util";

export async function getReactData(tab_view = undefined, playlist_id = undefined, loading = false) {
  const name = getItem("name");
  const authType = getItem("authType");
  const spotifyUser = getConnectedSpotifyUser();

  const selectedTabView = tab_view ? tab_view : getSelectedTabView();
  const metricsTypeSelected = getUserMetricsSelected();

  let spotifyPlaylists = [];
  let likedSongsTracks = [];
  let playlistTracks = [];
  let softwareTop40Playlist = undefined;
  let selectedPlaylistId = undefined;
  let recommendationInfo = [];
  let userMusicMetrics = [];
  let audioFeatures = [];
  let globalMusicMetrics = [];
  let averageMusicMetrics = undefined;
  let spotifyPlayerContext = undefined;
  let currentlyRunningTrack = undefined;
  let musicScatterData = undefined;
  let deviceMenuInfo = getDeviceMenuInfo();
  if (spotifyUser) {
    spotifyPlayerContext = await getPlayerContext();
    currentlyRunningTrack = getCachedRunningTrack();

    if (currentlyRunningTrack) {
      currentlyRunningTrack["liked"] = await isLikedSong(currentlyRunningTrack);
    }

    if (!loading) {
      const data = await getViewData(selectedTabView, playlist_id, spotifyUser);
      likedSongsTracks = data.likedSongsTracks;
      playlistTracks = data.playlistTracks;
      spotifyPlaylists = data.spotifyPlaylists;
      softwareTop40Playlist = data.softwareTop40Playlist;
      selectedPlaylistId = data.selectedPlaylistId;
      userMusicMetrics = data.userMusicMetrics;
      audioFeatures = data.audioFeatures;
      globalMusicMetrics = data.globalMusicMetrics;
      averageMusicMetrics = data.averageMusicMetrics;
      recommendationInfo = data.recommendationInfo;
      musicScatterData = data.musicScatterData;
    }
  }

  const registered = !!(name || spotifyUser);

  const reactData = {
    authType,
    loading,
    registered,
    email: name,
    spotifyPlaylists,
    selectedTabView,
    metricsTypeSelected,
    recommendationInfo,
    userMusicMetrics,
    globalMusicMetrics,
    audioFeatures,
    averageMusicMetrics,
    musicScatterData,
    likedSongsTracks,
    playlistTracks,
    softwareTop40Playlist,
    selectedPlaylistId,
    spotifyPlayerContext,
    currentlyRunningTrack,
    deviceMenuInfo,
    likedSongsPlaylist: getSpotifyLikedPlaylist(),
    spotifyUser: getConnectedSpotifyUser(),
    slackConnected: !!hasSlackWorkspaces(),
    slackWorkspaces: getSlackWorkspaces(),
    currentColorKind: getCurrentColorKind(),
    codeTimeInstalled: isCodeTimeTimeInstalled(),
    skipSlackConnect: getItem("vscode_CtskipSlackConnect"),
  };
  if (loading) {
    const getDataPromise = getViewData(selectedTabView, playlist_id, spotifyUser);
    // call this again with loading as false
    setTimeout(async () => {
      await getDataPromise;
      commands.executeCommand("musictime.refreshMusicTimeView", "playlists");
    }, 2000);
  }
  return reactData;
}

async function getViewData(selectedTabView, playlist_id, spotifyUser) {
  let likedSongsTracks = [];
  let playlistTracks = [];
  let spotifyPlaylists = [];
  let softwareTop40Playlist = undefined;
  let selectedPlaylistId = undefined;
  let userMusicMetrics = [];
  let globalMusicMetrics = [];
  let audioFeatures = [];
  let averageMusicMetrics = undefined;
  let recommendationInfo = [];
  let musicScatterData = undefined;

  if (spotifyUser) {
    if (selectedTabView === "playlists") {
      likedSongsTracks = getCachedLikedSongsTracks();
      playlistTracks = getCachedPlaylistTracks();
      const softwareTop40PlaylistP = getCachedSoftwareTop40Playlist();
      const spotifyPlaylistsP = getCachedSpotifyPlaylists();
      softwareTop40Playlist = await softwareTop40PlaylistP;
      spotifyPlaylists = await spotifyPlaylistsP;

      selectedPlaylistId = playlist_id ? playlist_id : getSelectedPlaylistId();
    } else if (selectedTabView === "metrics") {
      const metricsData = await getUserMusicMetrics();
      userMusicMetrics = metricsData.userMusicMetrics ?? [];
      globalMusicMetrics = metricsData.globalMusicMetrics ?? [];
      averageMusicMetrics = metricsData.averageMusicMetrics ?? [];
      audioFeatures = metricsData.audioFeatures ?? [];
      musicScatterData = metricsData.musicScatterData;
    } else if (selectedTabView === "recommendations") {
      recommendationInfo = getCachedRecommendationInfo();
    }
  }

  return {
    likedSongsTracks,
    playlistTracks,
    spotifyPlaylists,
    softwareTop40Playlist,
    selectedPlaylistId,
    userMusicMetrics,
    audioFeatures,
    globalMusicMetrics,
    musicScatterData,
    averageMusicMetrics,
    recommendationInfo,
  };
}

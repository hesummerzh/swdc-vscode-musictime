import React from "react";
import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import MuiSettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AlbumIcon from "@material-ui/icons/Album";
import deepPurple from "@material-ui/core/colors/deepPurple";
import ShareIcon from "@material-ui/icons/Share";
import CloseIcon from "@material-ui/icons/Close";
import SyncIcon from "@material-ui/icons/Sync";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import QueueIcon from "@material-ui/icons/Queue";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import TuneIcon from "@material-ui/icons/Tune";

// transform: "scale(1.5)" can change the size of the icon

// Material UI SVG Icons
export const MuiAlbumIcon = (props: SvgIconProps) => {
  return <AlbumIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiPlayCircleOutlineIcon = (props: SvgIconProps) => {
  return <PlayCircleOutlineIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiBubbleChartIcon = (props: SvgIconProps) => {
  return <BubbleChartIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiAccountCircleIcon = (props: SvgIconProps) => {
  return <AccountCircleIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiSyncIcon = (props: SvgIconProps) => {
  return <SyncIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiSettingIcon = (props: SvgIconProps) => {
  return <MuiSettingsIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
};

export const MuiShareIcon = (props: SvgIconProps) => {
  return <ShareIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiCloseIcon = (props: SvgIconProps) => {
  return <CloseIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiFavoriteIcon = (props: SvgIconProps) => {
  return <FavoriteIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiQueueIcon = (props: SvgIconProps) => {
  return <QueueIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiSubscriptionsIcon = (props: SvgIconProps) => {
  return <SubscriptionsIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

export const MuiTuneIcon = (props: SvgIconProps) => {
  return <TuneIcon {...props} style={{ color: deepPurple[400], marginLeft: -4, marginRight: 5 }} />;
}

// Custom SVG Icons
export const DashboardIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M13.7188 10.875C13.8734 10.875 14 11.0016 14 11.1562V11.7188C14 11.8734 13.8734 12 13.7188 12H2.28125C2.12656 12 2 11.8734 2 11.7188V3.28125C2 3.12656 2.12656 3 2.28125 3H2.84375C2.99844 3 3.125 3.12656 3.125 3.28125V10.875H13.7188ZM5.375 9.46875V7.78125C5.375 7.62656 5.24844 7.5 5.09375 7.5H4.53125C4.37656 7.5 4.25 7.62656 4.25 7.78125V9.46875C4.25 9.62344 4.37656 9.75 4.53125 9.75H5.09375C5.24844 9.75 5.375 9.62344 5.375 9.46875ZM7.625 9.46875V4.78125C7.625 4.62656 7.49844 4.5 7.34375 4.5H6.78125C6.62656 4.5 6.5 4.62656 6.5 4.78125V9.46875C6.5 9.62344 6.62656 9.75 6.78125 9.75H7.34375C7.49844 9.75 7.625 9.62344 7.625 9.46875ZM9.875 9.46875V6.28125C9.875 6.12656 9.74844 6 9.59375 6H9.03125C8.87656 6 8.75 6.12656 8.75 6.28125V9.46875C8.75 9.62344 8.87656 9.75 9.03125 9.75H9.59375C9.74844 9.75 9.875 9.62344 9.875 9.46875ZM12.125 9.46875V4.03125C12.125 3.87656 11.9984 3.75 11.8438 3.75H11.2812C11.1266 3.75 11 3.87656 11 4.03125V9.46875C11 9.62344 11.1266 9.75 11.2812 9.75H11.8438C11.9984 9.75 12.125 9.62344 12.125 9.46875Z" />
    </SvgIcon>
  );
};

export const ProjectSummaryIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M12.875 4.5H8.375L6.875 3H3.125C2.50367 3 2 3.50367 2 4.125V10.875C2 11.4963 2.50367 12 3.125 12H12.875C13.4963 12 14 11.4963 14 10.875V5.625C14 5.00367 13.4963 4.5 12.875 4.5Z" />
    </SvgIcon>
  );
};

export const SpotifyIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M8 2C4.6879 2 2 4.6879 2 8C2 11.3121 4.6879 14 8 14C11.3121 14 14 11.3121 14 8C14 4.6879 11.3121 2 8 2ZM10.4363 10.8282C10.3347 10.8282 10.2718 10.7968 10.1774 10.7411C8.66774 9.83145 6.91129 9.79274 5.17661 10.1484C5.08226 10.1726 4.95887 10.2113 4.88871 10.2113C4.65403 10.2113 4.50645 10.025 4.50645 9.82903C4.50645 9.57984 4.65403 9.46129 4.83548 9.42258C6.81694 8.98468 8.84194 9.02339 10.5694 10.0565C10.7169 10.1508 10.804 10.2355 10.804 10.4556C10.804 10.6758 10.6323 10.8282 10.4363 10.8282ZM11.0871 9.24113C10.9613 9.24113 10.8766 9.18548 10.7895 9.13952C9.27742 8.24435 7.02258 7.88387 5.01694 8.42823C4.90081 8.45968 4.8379 8.49113 4.72903 8.49113C4.47016 8.49113 4.25968 8.28064 4.25968 8.02177C4.25968 7.7629 4.38548 7.59113 4.63468 7.52097C5.30726 7.33226 5.99435 7.19194 7.00081 7.19194C8.57097 7.19194 10.0879 7.58145 11.2831 8.29274C11.479 8.40887 11.5565 8.55887 11.5565 8.76935C11.554 9.03064 11.3508 9.24113 11.0871 9.24113ZM11.8371 7.39758C11.7113 7.39758 11.6339 7.36613 11.525 7.30323C9.80242 6.275 6.72258 6.02823 4.72903 6.58468C4.64194 6.60887 4.53306 6.64758 4.41694 6.64758C4.09758 6.64758 3.85323 6.39839 3.85323 6.07661C3.85323 5.74758 4.05645 5.56129 4.27419 5.49839C5.12581 5.24919 6.07903 5.13065 7.11694 5.13065C8.88306 5.13065 10.7339 5.49839 12.0863 6.2871C12.275 6.39597 12.3984 6.54597 12.3984 6.83387C12.3984 7.1629 12.1323 7.39758 11.8371 7.39758Z"/>
    </SvgIcon>
  );
};

export const BeakerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M13.2467 11.457L10.4998 7.03906V3.5H10.6873C10.999 3.5 11.2498 3.24922 11.2498 2.9375V2.5625C11.2498 2.25078 10.999 2 10.6873 2H5.81228C5.50056 2 5.24978 2.25078 5.24978 2.5625V2.9375C5.24978 3.24922 5.50056 3.5 5.81228 3.5H5.99978V7.03906L3.25291 11.457C2.56619 12.5609 3.35837 14 4.6615 14H11.8381C13.1435 14 13.9334 12.5586 13.2467 11.457V11.457ZM6.23181 9.5L7.3615 7.68125C7.44822 7.55937 7.49744 7.40938 7.49744 7.25V3.5H8.99744V7.25C8.99744 7.41172 9.049 7.55937 9.13337 7.68125L10.2631 9.5H6.23181V9.5Z"/>
    </SvgIcon>
  )
}

export const FilterIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M13.4369 2H2.56315C2.06351 2 1.8114 2.60623 2.16542 2.96026L6.5 7.29549V12.125C6.5 12.3085 6.58955 12.4805 6.73993 12.5858L8.61492 13.8979C8.98484 14.1568 9.49999 13.8944 9.49999 13.437V7.29549L13.8347 2.96026C14.188 2.60694 13.9376 2 13.4369 2Z"/>
    </SvgIcon>
  )
}

export const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7659 12.64L10.7164 9.576C11.2766 8.792 11.6048 7.84 11.6048 6.8C11.6048 4.152 9.45173 2 6.8024 2C4.15308 2 2 4.152 2 6.8C2 9.448 4.15308 11.6 6.8024 11.6C7.84292 11.6 8.78739 11.272 9.57979 10.712L12.6453 13.76C12.7974 13.92 13.0055 14 13.2056 14C13.4057 14 13.6218 13.928 13.7659 13.76C14.078 13.448 14.078 12.944 13.7659 12.632V12.64ZM6.80187 10.56C4.72883 10.56 3.03999 8.87204 3.03999 6.80004C3.03999 4.72804 4.72883 3.04004 6.80187 3.04004C8.8749 3.04004 10.5637 4.72804 10.5637 6.80004C10.5637 8.87204 8.8749 10.56 6.80187 10.56V10.56Z"/>
    </SvgIcon>
  )
}

export const PlaylistIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M5.02738 3.5721C5.02738 3.44045 5.13411 3.33373 5.26576 3.33373H11.7734C11.9051 3.33373 12.0118 3.44045 12.0118 3.5721V4.81166C12.0118 4.94331 11.9051 5.05004 11.7734 5.05004H5.26576C5.13411 5.05004 5.02738 4.94331 5.02738 4.81166V3.5721Z"/>
      <path d="M5.02738 7.38613C5.02738 7.25448 5.13411 7.14775 5.26576 7.14775H11.7734C11.9051 7.14775 12.0118 7.25448 12.0118 7.38613V8.62569C12.0118 8.75734 11.9051 8.86407 11.7734 8.86407H5.26576C5.13411 8.86407 5.02738 8.75734 5.02738 8.62569V7.38613Z"/>
      <path d="M5.02738 11.2002C5.02738 11.0685 5.13411 10.9618 5.26576 10.9618H8.41233C8.54398 10.9618 8.65071 11.0685 8.65071 11.2002V12.4397C8.65071 12.5714 8.54398 12.6781 8.41233 12.6781H5.26576C5.13411 12.6781 5.02738 12.5714 5.02738 12.4397V11.2002Z"/>
      <path d="M4.38377 11.8199C4.38377 12.4782 3.85014 13.0118 3.19188 13.0118C2.53362 13.0118 2 12.4782 2 11.8199C2 11.1617 2.53362 10.6281 3.19188 10.6281C3.85014 10.6281 4.38377 11.1617 4.38377 11.8199Z"/>
      <path d="M4.38377 8.00591C4.38377 8.66417 3.85014 9.19779 3.19188 9.19779C2.53362 9.19779 2 8.66417 2 8.00591C2 7.34765 2.53362 6.81403 3.19188 6.81403C3.85014 6.81403 4.38377 7.34765 4.38377 8.00591Z"/>
      <path d="M4.38377 4.19188C4.38377 4.85014 3.85014 5.38377 3.19188 5.38377C2.53362 5.38377 2 4.85014 2 4.19188C2 3.53362 2.53362 3 3.19188 3C3.85014 3 4.38377 3.53362 4.38377 4.19188Z"/>
      <path d="M14.0001 3.66608C14.0001 3.60164 13.9377 3.55557 13.8765 3.57576C13.5084 3.69717 12.8559 3.94299 12.8559 4.23941V10.5469C12.5197 10.4181 12.1288 10.3419 11.7117 10.3419C10.4483 10.3419 9.42324 11.026 9.42324 11.8675C9.42324 12.7089 10.4483 13.3931 11.7117 13.3931C12.9751 13.3931 14.0001 12.7089 14.0001 11.8675V3.66608Z"/>
    </SvgIcon>
  )
}

export const TrackIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M14 2.57143C14 2.57143 14 2 13.4286 2L7.00951 3.37551C6.08737 3.57311 5.42857 4.38804 5.42857 5.33112V10.4829C5.06943 10.2652 4.62714 10.1315 4.14286 10.1315C2.96171 10.1315 2 10.9003 2 11.8458C2 12.7912 2.96171 13.56 4.14286 13.56C5.324 13.56 6.28571 12.7912 6.28571 11.8458V6.61805L13.1429 5.09405V8.76862C12.7837 8.55091 12.3414 8.41719 11.8571 8.41719C10.6751 8.41719 9.71429 9.18605 9.71429 10.1315C9.71429 11.0769 10.6751 11.8458 11.8571 11.8458C13.0391 11.8458 14 11.0769 14 10.1315V2.57143Z"/>
    </SvgIcon>
  )
}

export const PawIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6786 13.1612C10.5602 14.2796 8.74693 14.2796 7.62855 13.1612C6.51017 12.0428 6.51015 10.2296 7.62853 9.11118C8.74691 7.9928 10.5602 7.9928 11.6785 9.11118C12.7969 10.2296 12.7969 12.0428 11.6786 13.1612Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.57869 9.1112C2.46031 10.2296 2.46031 12.0428 3.57869 13.1612C4.69707 14.2796 6.51017 14.2796 7.62855 13.1612C8.74693 12.0428 8.74691 10.2296 7.62853 9.11118C6.51015 7.9928 4.69707 7.99282 3.57869 9.1112Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.62855 13.1612C6.51017 14.2796 4.69707 14.2796 3.57869 13.1612C2.46031 12.0428 2.46031 10.2296 3.57869 9.1112C4.69707 7.99282 6.51015 7.9928 7.62853 9.11118C8.74691 10.2296 8.74693 12.0428 7.62855 13.1612Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.60356 7.0862C6.72194 5.96782 8.53519 5.96782 9.65357 7.0862C10.772 8.20458 10.7719 10.0178 9.65356 11.1362C8.53518 12.2546 6.72208 12.2546 5.6037 11.1362C4.48532 10.0178 4.48517 8.20458 5.60356 7.0862Z"
      />
      <path d="M9.65356 11.1362L7.62855 13.1612L5.6037 11.1362L7.62853 9.11118L9.65356 11.1362Z" />
      <path d="M11.6785 9.11118L9.65356 11.1362L7.62853 9.11118L9.65357 7.0862L11.6785 9.11118Z" />
      <path d="M7.62853 9.11118L5.6037 11.1362L3.57869 9.1112L5.60356 7.0862L7.62853 9.11118Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6786 13.1612C12.7969 12.0428 12.7969 10.2296 11.6785 9.11118C10.5602 7.9928 8.74691 7.9928 7.62853 9.11118C6.51015 10.2296 6.51017 12.0428 7.62855 13.1612C8.74693 14.2796 10.5602 14.2796 11.6786 13.1612Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63255 5.23731C6.53786 5.23731 7.27177 4.51261 7.27177 3.61865C7.27177 2.7247 6.53786 2 5.63255 2C4.72723 2 3.99332 2.7247 3.99332 3.61865C3.99332 4.51261 4.72723 5.23731 5.63255 5.23731Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.63922 7.9116C3.54454 7.9116 4.27844 7.1869 4.27844 6.29295C4.27844 5.39899 3.54454 4.6743 2.63922 4.6743C1.7339 4.6743 1 5.39899 1 6.29295C1 7.1869 1.7339 7.9116 2.63922 7.9116Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.62351 5.23731C10.5288 5.23731 11.2627 4.51261 11.2627 3.61865C11.2627 2.7247 10.5288 2 9.62351 2C8.7182 2 7.98429 2.7247 7.98429 3.61865C7.98429 4.51261 8.7182 5.23731 9.62351 5.23731Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6168 7.9116C13.5222 7.9116 14.2561 7.1869 14.2561 6.29295C14.2561 5.39899 13.5222 4.6743 12.6168 4.6743C11.7115 4.6743 10.9776 5.39899 10.9776 6.29295C10.9776 7.1869 11.7115 7.9116 12.6168 7.9116Z"
      />
    </SvgIcon>
  );
};

export const DocumentIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M10.75 7.8125V8.46875C10.75 8.62344 10.6234 8.75 10.4688 8.75H6.53125C6.37656 8.75 6.25 8.62344 6.25 8.46875V7.8125C6.25 7.65781 6.37656 7.53125 6.53125 7.53125H10.4688C10.6234 7.53125 10.75 7.65781 10.75 7.8125ZM10.4688 9.5H6.53125C6.37656 9.5 6.25 9.62656 6.25 9.78125V10.4375C6.25 10.5922 6.37656 10.7188 6.53125 10.7188H10.4688C10.6234 10.7188 10.75 10.5922 10.75 10.4375V9.78125C10.75 9.62656 10.6234 9.5 10.4688 9.5ZM13 5.09141V12.875C13 13.4961 12.4961 14 11.875 14H5.125C4.50391 14 4 13.4961 4 12.875V3.125C4 2.50391 4.50391 2 5.125 2H9.90859C10.2063 2 10.4922 2.11953 10.7031 2.33047L12.6695 4.29688C12.8805 4.50547 13 4.79375 13 5.09141ZM10 3.21641V5H11.7836L10 3.21641ZM11.875 12.875V6.125H9.4375C9.12578 6.125 8.875 5.87422 8.875 5.5625V3.125H5.125V12.875H11.875Z" />
    </SvgIcon>
  );
};

export const SlackWorkspaceIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M8.54112 6.96866L9.05813 8.51433L7.4562 9.05009L6.93919 7.50442L8.54112 6.96866ZM9.65015 13.4969C5.52478 14.7345 3.7407 13.7755 2.50309 9.65015C1.26548 5.52478 2.22449 3.7407 6.34985 2.50309C10.4752 1.26548 12.2593 2.22449 13.4969 6.34985C14.7345 10.4752 13.7755 12.2593 9.65015 13.4969ZM11.8093 8.24109C11.7048 7.91428 11.3485 7.74283 11.0217 7.84731L10.2448 8.10715L9.72783 6.56148L10.5047 6.30164C10.8315 6.19716 11.0029 5.84088 10.8985 5.51407C10.794 5.18725 10.4377 5.01581 10.1109 5.12028L9.33405 5.38013L9.06617 4.57381C8.96169 4.24699 8.60541 4.07555 8.2786 4.18002C7.95178 4.28449 7.78034 4.64078 7.88481 4.96759L8.15269 5.77391L6.55077 6.31235L6.28288 5.50603C6.17841 5.17922 5.82213 5.00777 5.49532 5.11225C5.1685 5.21672 4.99706 5.573 5.10153 5.89982L5.36941 6.70614L4.59256 6.96598C4.26574 7.07045 4.0943 7.42674 4.19877 7.75355C4.28449 8.00268 4.52559 8.16609 4.77472 8.1768C4.88991 8.19287 4.98098 8.15001 5.7632 7.89017L6.28021 9.43584L5.50335 9.69568C5.17654 9.80016 5.00509 10.1564 5.10957 10.4833C5.19529 10.7324 5.43638 10.8958 5.68551 10.9065C5.8007 10.9226 5.89178 10.8797 6.67399 10.6199L6.94187 11.4262C7.04099 11.7155 7.36512 11.9245 7.72944 11.82C8.05625 11.7155 8.2277 11.3592 8.12323 11.0324L7.85534 10.2261L9.45727 9.68765L9.72515 10.494C9.82427 10.7833 10.1484 10.9922 10.5127 10.8878C10.8395 10.7833 11.011 10.427 10.9065 10.1002L10.6386 9.29386L11.4155 9.03402C11.7423 8.92151 11.9137 8.56523 11.8093 8.24109Z" />
    </SvgIcon>
  );
};

export const SlackFolderIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M8.54112 6.96866L9.05813 8.51433L7.4562 9.05009L6.93919 7.50442L8.54112 6.96866ZM9.65015 13.4969C5.52478 14.7345 3.7407 13.7755 2.50309 9.65015C1.26548 5.52478 2.22449 3.7407 6.34985 2.50309C10.4752 1.26548 12.2593 2.22449 13.4969 6.34985C14.7345 10.4752 13.7755 12.2593 9.65015 13.4969ZM11.8093 8.24109C11.7048 7.91428 11.3485 7.74283 11.0217 7.84731L10.2448 8.10715L9.72783 6.56148L10.5047 6.30164C10.8315 6.19716 11.0029 5.84088 10.8985 5.51407C10.794 5.18725 10.4377 5.01581 10.1109 5.12028L9.33405 5.38013L9.06617 4.57381C8.96169 4.24699 8.60541 4.07555 8.2786 4.18002C7.95178 4.28449 7.78034 4.64078 7.88481 4.96759L8.15269 5.77391L6.55077 6.31235L6.28288 5.50603C6.17841 5.17922 5.82213 5.00777 5.49532 5.11225C5.1685 5.21672 4.99706 5.573 5.10153 5.89982L5.36941 6.70614L4.59256 6.96598C4.26574 7.07045 4.0943 7.42674 4.19877 7.75355C4.28449 8.00268 4.52559 8.16609 4.77472 8.1768C4.88991 8.19287 4.98098 8.15001 5.7632 7.89017L6.28021 9.43584L5.50335 9.69568C5.17654 9.80016 5.00509 10.1564 5.10957 10.4833C5.19529 10.7324 5.43638 10.8958 5.68551 10.9065C5.8007 10.9226 5.89178 10.8797 6.67399 10.6199L6.94187 11.4262C7.04099 11.7155 7.36512 11.9245 7.72944 11.82C8.05625 11.7155 8.2277 11.3592 8.12323 11.0324L7.85534 10.2261L9.45727 9.68765L9.72515 10.494C9.82427 10.7833 10.1484 10.9922 10.5127 10.8878C10.8395 10.7833 11.011 10.427 10.9065 10.1002L10.6386 9.29386L11.4155 9.03402C11.7423 8.92151 11.9137 8.56523 11.8093 8.24109Z" />
    </SvgIcon>
  );
};

export const MessageIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M8.00119 3C4.68819 3 2.00029 4.93987 2.00029 7.33398C2.00029 8.36122 2.49412 9.30302 3.31924 10.0469C3.13796 10.5324 2.85875 10.7282 2.54621 10.9449C2.31492 11.1054 1.87527 11.3554 2.03363 11.8451C2.1399 12.166 2.46911 12.3597 2.8275 12.3306C4.02976 12.2347 5.14451 11.9305 6.09882 11.445C6.69683 11.5888 7.3365 11.668 7.9991 11.668C11.3142 11.668 14 9.73017 14 7.33398C14.0021 4.93987 11.3163 3 8.00119 3ZM8.00119 10.6678C7.324 10.6678 6.63848 10.5761 5.9738 10.3761C5.50078 10.772 4.33397 11.3346 3.16713 11.5013C3.8339 11.0012 4.35064 10.2177 4.44232 9.65933C3.64845 9.11758 3.00044 8.30704 3.00044 7.33398C3.00044 5.85668 4.79863 4.00015 8.00119 4.00015C11.2037 4.00015 13.0019 5.85668 13.0019 7.33398C13.0019 8.81337 11.2037 10.6678 8.00119 10.6678ZM6.66765 7.33398C6.66765 7.88615 6.21967 8.33413 5.66751 8.33413C5.11534 8.33413 4.66736 7.88615 4.66736 7.33398C4.66736 6.78181 5.11534 6.33383 5.66751 6.33383C6.21967 6.33383 6.66765 6.78181 6.66765 7.33398ZM9.00134 7.33398C9.00134 7.88615 8.55335 8.33413 8.00119 8.33413C7.44902 8.33413 7.00104 7.88615 7.00104 7.33398C7.00104 6.78181 7.44902 6.33383 8.00119 6.33383C8.55335 6.33383 9.00134 6.78181 9.00134 7.33398ZM11.335 7.33398C11.335 7.88615 10.887 8.33413 10.3349 8.33413C9.7827 8.33413 9.33472 7.88615 9.33472 7.33398C9.33472 6.78181 9.7827 6.33383 10.3349 6.33383C10.887 6.33383 11.335 6.78181 11.335 7.33398Z" />
    </SvgIcon>
  );
};

export const VisibilityIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M7.97278 11.1663L8.65151 12.136C8.43494 12.1564 8.21754 12.1666 8.00001 12.1667C5.50397 12.1667 3.31316 10.8344 2.13847 8.84101C2.04781 8.68718 2 8.51188 2 8.33332C2 8.15476 2.04781 7.97945 2.13847 7.82562C2.63895 6.97633 3.32416 6.24697 4.13897 5.68943L5.32807 7.38816C5.22368 7.68374 5.16668 8.00181 5.16668 8.33333C5.16668 9.89033 6.41949 11.1517 7.97278 11.1663ZM13.8615 8.84101C13.2018 9.96053 12.221 10.8714 11.0454 11.4551L11.0456 11.4554L11.9096 12.6887C12.0679 12.915 12.0129 13.2266 11.7867 13.385L11.5135 13.5762C11.2873 13.7346 10.9756 13.6796 10.8173 13.4533L4.09043 3.97791C3.93209 3.75166 3.98709 3.44 4.21334 3.28166L4.48647 3.09041C4.71272 2.93208 5.02438 2.98708 5.18272 3.21333L6.24601 4.72618C6.80584 4.57866 7.39386 4.5 8.00001 4.5C10.496 4.5 12.6869 5.83227 13.8615 7.82564C13.9522 7.97947 14 8.15477 14 8.33333C14 8.51188 13.9522 8.68718 13.8615 8.84101ZM10.8333 8.33333C10.8333 6.7672 9.56588 5.49999 8.00001 5.49999C7.62628 5.49999 7.26967 5.57235 6.94315 5.70358L7.34522 6.26729C7.88415 6.09706 8.49197 6.13889 9.02022 6.42166H9.01959C8.52688 6.42166 8.12751 6.82104 8.12751 7.31374C8.12751 7.80595 8.5264 8.20583 9.01959 8.20583C9.5123 8.20583 9.91167 7.80645 9.91167 7.31374V7.31312C10.2963 8.03166 10.2515 8.93633 9.7398 9.62458V9.62478L10.1422 10.1886C10.5728 9.69166 10.8333 9.0432 10.8333 8.33333ZM7.45863 10.4318L5.84343 8.12437C5.73897 9.21576 6.45413 10.1734 7.45863 10.4318Z" />
    </SvgIcon>
  );
};

export const GoogleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M14 8.14032C14 11.5637 11.6172 14 8.09836 14C4.72459 14 2 11.3194 2 8C2 4.68065 4.72459 2 8.09836 2C9.74098 2 11.123 2.59274 12.1877 3.57016L10.5279 5.14032C8.35656 3.07903 4.31885 4.62742 4.31885 8C4.31885 10.0927 6.01803 11.7887 8.09836 11.7887C10.5131 11.7887 11.418 10.0855 11.5607 9.20242H8.09836V7.13871H13.9041C13.9607 7.44597 14 7.74113 14 8.14032Z" />
    </SvgIcon>
  );
};

export const GithubIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M6.01371 11.6624C6.01371 11.712 5.95806 11.7517 5.8879 11.7517C5.80806 11.7592 5.75242 11.7195 5.75242 11.6624C5.75242 11.6128 5.80806 11.5731 5.87823 11.5731C5.95081 11.5656 6.01371 11.6053 6.01371 11.6624ZM5.26129 11.5507C5.24435 11.6003 5.29274 11.6574 5.36532 11.6723C5.42823 11.6971 5.50081 11.6723 5.51532 11.6227C5.52984 11.5731 5.48387 11.516 5.41129 11.4937C5.34839 11.4763 5.27823 11.5011 5.26129 11.5507ZM6.33065 11.5085C6.26048 11.5259 6.2121 11.5731 6.21935 11.6301C6.22661 11.6798 6.28952 11.712 6.3621 11.6946C6.43226 11.6773 6.48064 11.6301 6.47339 11.5805C6.46613 11.5334 6.40081 11.5011 6.33065 11.5085ZM7.92258 2C4.56694 2 2 4.61286 2 8.0545C2 10.8063 3.68871 13.1611 6.10081 13.9899C6.41048 14.047 6.51935 13.8509 6.51935 13.6896C6.51935 13.5358 6.5121 12.6872 6.5121 12.1661C6.5121 12.1661 4.81855 12.5383 4.4629 11.4267C4.4629 11.4267 4.1871 10.7046 3.79032 10.5185C3.79032 10.5185 3.23629 10.1289 3.82903 10.1364C3.82903 10.1364 4.43145 10.186 4.7629 10.7765C5.29274 11.7343 6.18064 11.4589 6.52661 11.2951C6.58226 10.8981 6.73952 10.6227 6.91371 10.4589C5.56129 10.3051 4.19677 10.1041 4.19677 7.71703C4.19677 7.03466 4.38065 6.69224 4.76774 6.25552C4.70484 6.09423 4.49919 5.42923 4.83065 4.57068C5.33629 4.40939 6.5 5.24065 6.5 5.24065C6.98387 5.10169 7.50403 5.02973 8.01935 5.02973C8.53468 5.02973 9.05484 5.10169 9.53871 5.24065C9.53871 5.24065 10.7024 4.40691 11.2081 4.57068C11.5395 5.43171 11.3339 6.09423 11.271 6.25552C11.6581 6.69472 11.8952 7.03714 11.8952 7.71703C11.8952 10.1115 10.4702 10.3026 9.11774 10.4589C9.34032 10.655 9.52903 11.0272 9.52903 11.6103C9.52903 12.4465 9.52177 13.4812 9.52177 13.6847C9.52177 13.846 9.63306 14.042 9.94032 13.9849C12.3597 13.1611 14 10.8063 14 8.0545C14 4.61286 11.2782 2 7.92258 2ZM4.35161 10.5582C4.32016 10.583 4.32742 10.6401 4.36855 10.6872C4.40726 10.7269 4.4629 10.7443 4.49435 10.712C4.52581 10.6872 4.51855 10.6301 4.47742 10.583C4.43871 10.5433 4.38306 10.5259 4.35161 10.5582ZM4.09032 10.3572C4.07339 10.3894 4.09758 10.4292 4.14597 10.454C4.18468 10.4788 4.23306 10.4713 4.25 10.4366C4.26694 10.4043 4.24274 10.3646 4.19435 10.3398C4.14597 10.3249 4.10726 10.3324 4.09032 10.3572ZM4.87419 11.2406C4.83548 11.2728 4.85 11.3473 4.90565 11.3944C4.96129 11.4515 5.03145 11.4589 5.0629 11.4192C5.09435 11.387 5.07984 11.3125 5.03145 11.2654C4.97823 11.2083 4.90565 11.2009 4.87419 11.2406ZM4.59839 10.8758C4.55968 10.9006 4.55968 10.9651 4.59839 11.0222C4.6371 11.0793 4.70242 11.1041 4.73387 11.0793C4.77258 11.047 4.77258 10.9825 4.73387 10.9254C4.7 10.8684 4.6371 10.8435 4.59839 10.8758Z" />
    </SvgIcon>
  );
};

export const EmailIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} style={{ color: deepPurple[400], padding: 0, marginBottom: -8, transform: "scale(1.5)" }}>
      <path d="M13.7727 6.97188C13.8641 6.89922 14 6.96719 14 7.08203V11.875C14 12.4961 13.4961 13 12.875 13H3.125C2.50391 13 2 12.4961 2 11.875V7.08438C2 6.96719 2.13359 6.90156 2.22734 6.97422C2.75234 7.38203 3.44844 7.9 5.83906 9.63672C6.33359 9.99766 7.16797 10.757 8 10.7523C8.83672 10.7594 9.6875 9.98359 10.1633 9.63672C12.5539 7.9 13.2477 7.37969 13.7727 6.97188ZM8 10C8.54375 10.0094 9.32656 9.31563 9.72031 9.02969C12.8305 6.77266 13.0672 6.57578 13.7844 6.01328C13.9203 5.90781 14 5.74375 14 5.57031V5.125C14 4.50391 13.4961 4 12.875 4H3.125C2.50391 4 2 4.50391 2 5.125V5.57031C2 5.74375 2.07969 5.90547 2.21563 6.01328C2.93281 6.57344 3.16953 6.77266 6.27969 9.02969C6.67344 9.31563 7.45625 10.0094 8 10Z" />
    </SvgIcon>
  );
};

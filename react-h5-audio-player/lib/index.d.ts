import React, { Component, ReactNode, CSSProperties, ReactElement, Key } from 'react';
import { RHAP_UI, MAIN_LAYOUT, AUDIO_PRELOAD_ATTRIBUTE, TIME_FORMAT } from './constants';
declare type CustomUIModule = RHAP_UI | ReactElement;
declare type CustomUIModules = Array<CustomUIModule>;
declare type OnSeek = (audio: HTMLAudioElement, time: number) => Promise<void>;
interface MSEPropsObject {
    onSeek: OnSeek;
    onEcrypted?: (e: unknown) => void;
    srcDuration: number;
}
interface PlayerProps {
    /**
     * HTML5 Audio tag autoPlay property
     */
    autoPlay?: boolean;
    /**
     * Whether to play audio after src prop is changed
     */
    autoPlayAfterSrcChange?: boolean;
    /**
     * custom classNames
     */
    className?: string;
    /**
     * The time interval to trigger onListen
     */
    listenInterval?: number;
    progressJumpStep?: number;
    progressJumpSteps?: {
        backward?: number;
        forward?: number;
    };
    volumeJumpStep?: number;
    loop?: boolean;
    muted?: boolean;
    crossOrigin?: string;
    mediaGroup?: string;
    onAbort?: (e: Event) => void;
    onCanPlay?: (e: Event) => void;
    onCanPlayThrough?: (e: Event) => void;
    onEnded?: (e: Event) => void;
    onError?: (e: Event) => void;
    onListen?: (e: Event) => void;
    onVolumeChange?: (e: Event) => void;
    onPause?: (e: Event) => void;
    onPlay?: (e: Event) => void;
    onClickPrevious?: (e: React.SyntheticEvent) => void;
    onClickNext?: (e: React.SyntheticEvent) => void;
    onPlayError?: (err: Error) => void;
    mse?: MSEPropsObject;
    /**
     * HTML5 Audio tag preload property
     */
    preload?: AUDIO_PRELOAD_ATTRIBUTE;
    /**
     * Pregress indicator refresh interval
     */
    progressUpdateInterval?: number;
    /**
     * HTML5 Audio tag src property
     */
    src?: string;
    defaultCurrentTime?: ReactNode;
    defaultDuration?: ReactNode;
    volume?: number;
    showJumpControls?: boolean;
    showSkipControls?: boolean;
    showDownloadProgress?: boolean;
    showFilledProgress?: boolean;
    showFilledVolume?: boolean;
    timeFormat?: TIME_FORMAT;
    header?: ReactNode;
    footer?: ReactNode;
    customIcons?: CustomIcons;
    layout?: MAIN_LAYOUT;
    customProgressBarSection?: CustomUIModules;
    customControlsSection?: CustomUIModules;
    customAdditionalControls?: CustomUIModules;
    customVolumeControls?: CustomUIModules;
    children?: ReactNode;
    style?: CSSProperties;
}
interface CustomIcons {
    play?: ReactNode;
    pause?: ReactNode;
    rewind?: ReactNode;
    forward?: ReactNode;
    previous?: ReactNode;
    next?: ReactNode;
    loop?: ReactNode;
    loopOff?: ReactNode;
    volume?: ReactNode;
    volumeMute?: ReactNode;
}
declare class H5AudioPlayer extends Component<PlayerProps> {
    static defaultProps: PlayerProps;
    audio: React.RefObject<HTMLAudioElement>;
    progressBar: React.RefObject<HTMLDivElement>;
    container: React.RefObject<HTMLDivElement>;
    lastVolume: number;
    listenTracker?: number;
    volumeAnimationTimer?: number;
    downloadProgressAnimationTimer?: number;
    togglePlay: (e: React.SyntheticEvent) => void;
    /**
     * Safely play audio
     *
     * Reference: https://developers.google.com/web/updates/2017/06/play-request-was-interrupted
     */
    playAudioPromise: () => void;
    isPlaying: () => boolean;
    handlePlay: (e: Event) => void;
    handlePause: (e: Event) => void;
    handleAbort: (e: Event) => void;
    handleClickVolumeButton: () => void;
    handleMuteChange: () => void;
    handleClickLoopButton: () => void;
    handleClickRewind: () => void;
    handleClickForward: () => void;
    setJumpTime: (time: number) => void;
    setJumpVolume: (volume: number) => void;
    handleKeyDown: (e: React.KeyboardEvent) => void;
    renderUIModules: (modules: CustomUIModules) => Array<ReactElement>;
    renderUIModule: (comp: CustomUIModule, key: Key) => ReactElement;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PlayerProps): void;
    componentWillUnmount(): void;
    render(): ReactNode;
}
export default H5AudioPlayer;
export { RHAP_UI, OnSeek };

import {Composition} from "remotion";
import {HigDoctorShowcase} from "./HigDoctorShowcase";

export const RemotionRoot = () => {
  return (
    <Composition
      id="HigDoctorShowcase"
      component={HigDoctorShowcase}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

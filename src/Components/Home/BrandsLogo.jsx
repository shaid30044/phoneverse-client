import HuaweiLogo from "../../assets/Logo/Huawei.png";
import AppleLogo from "../../assets/Logo/Apple.png";
import SamsungLogo from "../../assets/Logo/Samsung.png";
import GoogleLogo from "../../assets/Logo/Google.png";
import AsusLogo from "../../assets/Logo/Asus.png";
import OneplusLogo from "../../assets/Logo/Oneplus.png";
import VivoLogo from "../../assets/Logo/Vivo.png";
import XiaomiLogo from "../../assets/Logo/Xiaomi.png";
import OppoLogo from "../../assets/Logo/Oppo.png";
import ZTELogo from "../../assets/Logo/ZTE.png";
import Marquee from "react-fast-marquee";

const BrandsLogo = () => {
  const logos = [
    HuaweiLogo,
    AppleLogo,
    SamsungLogo,
    GoogleLogo,
    AsusLogo,
    OneplusLogo,
    VivoLogo,
    XiaomiLogo,
    OppoLogo,
    ZTELogo,
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-20">
      <Marquee autoFill={true} gradient={true} gradientWidth={140}>
        <div className="flex justify-between items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-5 px-10"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandsLogo;

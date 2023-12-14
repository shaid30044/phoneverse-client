import HuaweiLogo from "../../assets/Logo/Huawei.png";
import AppleLogo from "../../assets/Logo/Apple.png";
import SamsungLogo from "../../assets/Logo/Samsung.png";
import GoogleLogo from "../../assets/Logo/Google.png";

const BrandsLogo = () => {
  const logos = [HuaweiLogo, AppleLogo, SamsungLogo, GoogleLogo];

  return (
    <div className="flex justify-center items-center gap-20 px-4 py-20">
      {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index}`} className="h-10" />
      ))}
    </div>
  );
};

export default BrandsLogo;

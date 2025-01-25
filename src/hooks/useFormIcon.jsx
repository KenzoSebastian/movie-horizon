import { IconAt, IconEye, IconEyeOff, IconLock } from "@tabler/icons-react";
import { useState } from "react";

const useFormIcon = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const emailIcon = <IconAt size={18} />;
  const passwordIcon = <IconLock size={18} />;
  const eyeIcon =
    visiblePassword ? (
      <IconEyeOff
        size={18}
        className="eye-password"
        onClick={() => setVisiblePassword((prev) => !prev)}
      />
    ) : (
      <IconEye
        size={18}
        className="eye-password"
        onClick={() => setVisiblePassword((prev) => !prev)}
      />
    );

  return { visiblePassword, emailIcon, passwordIcon, eyeIcon };
};

export default useFormIcon;

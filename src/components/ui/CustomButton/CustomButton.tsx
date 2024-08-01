"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./CustomButton.css";
const CustomButton = ({ children, className, path }: any) => {
  const classes = " lg:px-10  uppercase transform duration-500";
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${classes} ${
        pathName === path
          ? "text-light-primary-color font-Space btn dark:text-dark-primary-color"
          : "text-[#575757c5]  btn dark:text-light-secondary-color hover:text-light-primary-color  font-Space text-nowrap dark:hover:text-dark-primary-color"
      } ${className}`}
    >
      <span className="btn-text-one">{children}</span>
      <span className="btn-text-two">{children}</span>
    </Link>
  );
};

export default CustomButton;

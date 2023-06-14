import React from "react";

interface IconProps {
  name: string;
  width?: number;
  height?: number;
  [key: string]: any;
}

const ReloadIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.57812 9.11133C7.79785 9.11133 7.96484 9.04102 8.09668 8.90918L11.5156 5.46387C11.6738 5.30566 11.7441 5.12988 11.7441 4.92773C11.7441 4.73438 11.665 4.54102 11.5156 4.3916L8.09668 0.919922C7.96484 0.779297 7.79785 0.700195 7.57812 0.700195C7.18262 0.700195 6.875 1.02539 6.875 1.43848C6.875 1.62305 6.94531 1.79883 7.06836 1.94824L9.21289 4.04004C8.76465 3.96094 8.30762 3.92578 7.85938 3.92578C3.76367 3.92578 0.485352 7.19531 0.485352 11.291C0.485352 15.3867 3.77246 18.6826 7.86816 18.6826C11.9551 18.6826 15.2422 15.3867 15.2422 11.291C15.2422 10.8604 14.9346 10.5439 14.4951 10.5439C14.0732 10.5439 13.792 10.8604 13.792 11.291C13.792 14.5869 11.1553 17.2324 7.86816 17.2324C4.57227 17.2324 1.93555 14.5869 1.93555 11.291C1.93555 7.98633 4.56348 5.3584 7.85938 5.3584C8.46582 5.3584 9.01074 5.40234 9.49414 5.49902L7.07715 7.89844C6.94531 8.03906 6.875 8.20605 6.875 8.39062C6.875 8.80371 7.18262 9.11133 7.57812 9.11133Z"
        fill="white"
      />
    </svg>
  );
};
const AaIcon = ({ height, width }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.39062 13.167C9.83887 13.167 10.0674 12.9736 10.2432 12.4814L11.2715 9.64258H16.1318L17.1514 12.4814C17.3271 12.9736 17.5557 13.167 18.0039 13.167C18.4961 13.167 18.8213 12.877 18.8213 12.4199C18.8213 12.2617 18.7861 12.1211 18.7246 11.9277L14.8838 1.67969C14.6729 1.1084 14.2949 0.835938 13.6973 0.835938C13.126 0.835938 12.7393 1.1084 12.5371 1.6709L8.69629 11.9453C8.62598 12.1387 8.59961 12.2793 8.59961 12.4287C8.59961 12.8857 8.89844 13.167 9.39062 13.167ZM11.6934 8.28906L13.6709 2.75195H13.7236L15.6924 8.28906H11.6934ZM0.882812 13.167C1.25195 13.167 1.49805 12.9824 1.64746 12.5078L2.28027 10.6797H5.33008L5.96289 12.5078C6.12109 12.9912 6.36719 13.167 6.73633 13.167C7.18457 13.167 7.50098 12.877 7.50098 12.4551C7.50098 12.2969 7.46582 12.1387 7.38672 11.9189L4.92578 5.37109C4.73242 4.84375 4.37207 4.51855 3.79199 4.51855C3.23828 4.51855 2.88672 4.84375 2.69336 5.37109L0.223633 11.9189C0.144531 12.1387 0.118164 12.3057 0.118164 12.4551C0.118164 12.877 0.425781 13.167 0.882812 13.167ZM2.66699 9.47559L3.74805 6.22363H3.85352L4.94336 9.47559H2.66699Z"
        fill="white"
      />
    </svg>
  );
};
const LockIcon = ({ height, width }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <path
        d="M1.98535 13.4834H8.17871C9.01953 13.4834 9.43652 13.0664 9.43652 12.1504V7.37891C9.43652 6.55176 9.09473 6.12109 8.39062 6.05273V4.43262C8.39062 1.99219 6.78418 0.80957 5.08203 0.80957C3.37988 0.80957 1.77344 1.99219 1.77344 4.43262V6.07324C1.12402 6.17578 0.727539 6.59961 0.727539 7.37891V12.1504C0.727539 13.0664 1.14453 13.4834 1.98535 13.4834ZM2.87402 4.30273C2.87402 2.7168 3.88574 1.8623 5.08203 1.8623C6.27148 1.8623 7.29004 2.7168 7.29004 4.30273V6.0459H2.87402V4.30273Z"
        fill="#b2b2b2"
      />
    </svg>
  );
};

const icons: Record<string, React.ComponentType<IconProps>> = {
  Reload: ReloadIcon,
  Aa: AaIcon,
  Lock: LockIcon,
};

const Icon = ({ name, width = 14, height = 18, ...props }: IconProps) => {
  const Component = icons[name];
  if (!Component) {
    return null;
  }
  return <Component name={name} width={width} height={height} {...props} />;
};

export default Icon;
import Icon from "./icon";

const Footer = () => {
  return (
    <div className="text-sm hidden md:flex md:flex-col items-center gap-4 absolute md:right-2 md:bottom-1/2">
      <a
        href="https://www.twitter.com/vaycem"
        target="_blank"
        className="text-white h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center"
      >
        <Icon name="Twitter" width={24} height={24} />
      </a>
      <a
        href="https://github.com/cemtatli"
        target="_blank"
        className="text-white h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center "
      >
        <Icon name="Github" width={24} height={24} />
      </a>
    </div>
  );
};

export default Footer;

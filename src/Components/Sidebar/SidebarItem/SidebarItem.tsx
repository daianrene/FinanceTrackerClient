interface Props {
  key: string;
  icon: string;
  title: string;
  onItemClicked: () => void;
  isActive: boolean;
}

const SidebarItem: React.FC<Props> = ({ icon, title, onItemClicked }) => {
  return (
    <p
      className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
      onClick={onItemClicked}
    >
      <i className={icon}></i>
      {title}
    </p>
  );
};

export default SidebarItem;

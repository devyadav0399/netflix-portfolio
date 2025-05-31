interface PropTypes {
  name: string;
  image: string;
  onClick: () => void;
}

function ProfileCard({ name, image, onClick }: PropTypes) {
  return (
    <div className="flex flex-col">
      <div
        className="w-32 h-32 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:border-white border-2 border-transparent rounded-md transition-all duration-300"
        />
      </div>
      <p className="text-white text-center mt-2">{name}</p>
    </div>
  );
}

export default ProfileCard;

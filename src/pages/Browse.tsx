import ProfileCard from "../components/ProfileCard";
import avatarRed from "../assets/images/avatar-red.png";
import avatarTeal from "../assets/images/avatar-teal.png";
import avatarYellow from "../assets/images/avatar-yellow.png";
import avatarGray from "../assets/images/avatar-gray.png";

interface Profile {
  id: number;
  name: string;
  image: string;
}

function Browse() {
  const profiles: Profile[] = [
    {
      id: 1,
      name: "Recruiter",
      image: avatarRed,
    },
    {
      id: 2,
      name: "Developer",
      image: avatarYellow,
    },
    {
      id: 3,
      name: "Designer",
      image: avatarTeal,
    },
    {
      id: 4,
      name: "Stalker",
      image: avatarGray,
    },
  ];

  const handleProfileClick = (profile: Profile) =>
    console.log(`Profile ${profile.id} clicked`);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#141414]">
      <h1 className="text-3xl text-white">Who is watching?</h1>
      <div className="flex flex-row justify-center items-center gap-5 mt-10">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
}

export default Browse;

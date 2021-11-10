import GenerateParticipantCard from "./GenerateParticipantCard";

const data = [
  {
    name: "Mahesh Adhikari",
    profile: "/src/assets/user.jpg",
  },
  {
    name: "Bipin Sahu",
    profile: "/src/assets/user.jpg",
  },
];

function GenerateParticipantsBlock() {
  const _generateParticipant = () => {
    return data.map((item, index) => {
      return (
        <GenerateParticipantCard
          key={index}
          name={item.name}
          profile={item.profile}
        />
      );
    });
  };

  return (
    <div
      className="participants-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: "5px",
      }}
    >
      {_generateParticipant()}
    </div>
  );
}

export default GenerateParticipantsBlock;

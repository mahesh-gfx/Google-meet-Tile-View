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
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "5px",
        width: 360,
      }}
    >
      <h1
        style={{
          fontSize: 14,
          fontWeight: 600,
          color: "#5f6368",
          paddingLeft: 24,
          fontFamily: "Google Sans,Roboto,Arial,sans-serif;",
        }}
      >
        In Call
      </h1>
      {_generateParticipant()}
    </div>
  );
}

export default GenerateParticipantsBlock;

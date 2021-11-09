import GenerateAvatar from "./GenerateAvatar";

function GenerateParticipantCard(prop: any) {
  const { name, profile } = prop;
  const svg1 = `<svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class="Hdh4hc cIGbvc NMm5M"><path d="M11 5c0-.55.45-1 1-1s1 .45 1 1v5.17l1.82 1.82c.11-.31.18-.64.18-.99V5c0-1.66-1.34-3-3-3S9 3.34 9 5v1.17l2 2V5zM2.81 2.81L1.39 4.22l11.65 11.65c-.33.08-.68.13-1.04.13-2.76 0-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c.57-.08 1.12-.24 1.64-.46l5.14 5.14 1.41-1.41L2.81 2.81zM19 11h-2c0 .91-.26 1.75-.69 2.48l1.46 1.46A6.921 6.921 0 0 0 19 11z"></path></svg>`;
  const svg2 = `<svg focusable="false" height="24" viewBox="0 0 24 24" width="24" class="Hdh4hc cIGbvc NMm5M"><path d="M0 0h24v24H0z" fill="none" stroke="#000" stroke-opacity=".008" stroke-width="0"></path><path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"></path></svg>`;

  const _generateActionBtns = () => {
    return (
      <>
        <button>{svg1}</button>
        <button>{svg2}</button>
      </>
    );
  };

  return (
    <>
      <div
        className="participant-card"
        style={{
          display: "flex",
          height: "56px",
          padding: "0px 16px 0px 20px",
        }}
      >
        <div
          className="participant-info-wrap"
          style={{ display: "flex", alignItems: "center" }}
        >
          <GenerateAvatar src={profile} />
          <div
            className="username"
            style={{ fontSize: "14px", fontWeight: 400, color: "#5f6368" }}
          >
            {name}
          </div>
        </div>
        <div className="action-buttons">{_generateActionBtns}</div>
      </div>
    </>
  );
}

export default GenerateParticipantCard;

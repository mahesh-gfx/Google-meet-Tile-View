function GenerateAvatar(prop: any) {
  const { src } = prop;
  return (
    <div className="avatar">
      <img
        src={src}
        style={{ height: "100px", marginRight: "16px", borderRadius: "25em" }}
        alt=""
      />
    </div>
  );
}

export default GenerateAvatar;

const SideSection = () => {
  return (
    <div className={"side_parent"}>
      <img
        src="../public/images/side_shape_top.svg"
        className={"shape_top"}
        alt=""
      />
      <img
        src="../../public/images/logo_arabic_light.svg"
        alt=""
        className={"logo"}
      />
      <div className="content">
        <h1 className="title">مرحباً في طوبي !</h1>
        <h6 className={"desc"}>
          منصتك الطبية اللي تجمع كل خدمات التأمين الصحي في مكان واحد، من
          المطالبات للاستشارات والأدوية.
        </h6>
      </div>
      <img
        src="../public/images/side_shape_bottom.svg"
        className={"shape_bottom"}
        alt=""
      />
    </div>
  );
};

export default SideSection;

const Title = ({ title }) => {
  return (
    <div>
      <h3 className="border-b-[3px] border-primary/10 pb-1">
        <span className="text-2xl font-medium text-primary border-b-[3px] border-primary pb-1">
          {title}
        </span>
      </h3>
    </div>
  );
};

export default Title;

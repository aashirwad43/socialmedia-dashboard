function ArticleCard({ children }) {
  return (
    <div className="mx-auto px-6 lg:px-8 rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-10 w-[500px] h-[300px] bg-white ">
      {children}
    </div>
  );
}

export default ArticleCard;

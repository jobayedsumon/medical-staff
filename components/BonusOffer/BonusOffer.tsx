const BonusOffer = ({ title }: { title?: string }) => {
  return (
    <section className="mt-20 w-100 bg-theme-SkinColor">
      <div className="container  py-5 px-4 text-white">
        <h3 className="text-white">
          {title
            ? title
            : 'Bonus on offer for Rural & Regional Nursing with a bonus of $1000 for every 8 weeks of contract you successfully complete.'}
        </h3>
        <span>* Conditions Apply</span>
      </div>
    </section>
  );
};

export default BonusOffer;

import MoneySquare from '@/assets/icons/money-square.svg';
import Link from 'next/link';
const ReferAndEarn = () => {
  return (
    <div
      className="d-flex justify-content-between h-100 "
      style={{
        backgroundImage: 'url(/images/services/referal.jpg)',
        backgroundSize: 'cover',
        borderRadius: '10px',
      }}
    >
      <div className="w-100 h-100 referal-card d-flex flex-column align-items-center justify-content-center py-5 px-4">
        <MoneySquare />
        <h3 className="mt-30 text-white">REFER AND EARN</h3>
        <p className="text-white text-center">
          Introduce your friends or colleagues to us to receive a great referral
          bonus as a reward.
        </p>
        <Link
          className="ttm-btn ttm-btn-size-lg ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor px-5"
          href="/referal"
        >
          Learn More
        </Link>
        <span className="text-white">*Conditions Apply</span>
      </div>
    </div>
  );
};

export default ReferAndEarn;

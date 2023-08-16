import { PAGINATION_DOTS, usePagination } from '@/hooks/use-pagination';
import { classNames } from '@/utils/class-names';
import { useRouter } from 'next/router';

interface PaginationProps {
  total: number;
  onPageChange?: (page: number) => void;
  take?: number;
}

const Pagination = ({ total, onPageChange, take = 10 }: PaginationProps) => {
  const router = useRouter();
  const params = router.query;

  const page = params.page ? +params.page : 1;

  const totalPages = Math.ceil(total / take);

  const pageRange = usePagination({
    totalCount: total,
    pageSize: take,
    currentPage: page,
  });

  const switchPage = (new_page: number) => {
    if (onPageChange) {
      onPageChange(new_page);
    } else {
      params.page = `${new_page}`;
      router.push(router);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      switchPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < totalPages) {
      switchPage(page + 1);
    }
  };

  const hasNext = page < totalPages;

  const hasPrev = page > 1;

  return (
    <div className="job-pagination-block d-flex align-items-center justify-content-end">
      <button
        className="page-nav-link"
        type="button"
        onClick={handlePrev}
        disabled={!hasPrev}
      >
        prev
      </button>
      {pageRange.map((pageNumber, idx) => {
        if (pageNumber === PAGINATION_DOTS) {
          return (
            <div key={idx} className="px-2">
              &#8230;
            </div>
          );
        }

        return (
          <button
            className={classNames(
              'page-nav-link',
              page === pageNumber ? 'current' : ''
            )}
            onClick={() => switchPage(+pageNumber)}
            key={idx}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className="page-nav-link"
        onClick={handleNext}
        disabled={!hasNext}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;

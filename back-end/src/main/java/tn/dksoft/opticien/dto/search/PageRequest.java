package tn.dksoft.opticien.dto.search;

import org.springframework.data.domain.AbstractPageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public class PageRequest extends AbstractPageRequest {

	private static final long serialVersionUID = 1L;

	public PageRequest(int page, int size) {
		super(page, size);
	}

	@Override
	public Sort getSort() {
		return Sort.unsorted();
	}

	@Override
	public Pageable withPage(int pageNumber) {
		return null;
	}

	@Override
	public Pageable next() {
		return null;
	}

	@Override
	public Pageable previous() {
		return null;
	}

	@Override
	public Pageable first() {
		return null;
	}

}

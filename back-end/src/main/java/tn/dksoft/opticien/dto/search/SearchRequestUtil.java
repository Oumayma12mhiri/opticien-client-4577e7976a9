package tn.dksoft.opticien.dto.search;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class SearchRequestUtil {
	private static final int DEFAULT_PAGE_SIZE = 5;
	
	public static PageRequest toPageRequest(final SearchRequest request)
	{
		if(request== null)
		{
			return new PageRequest(0, DEFAULT_PAGE_SIZE);
		}
		final int requestSize = request.getSize();
		return new PageRequest(request.getPage(), requestSize == 0 ? DEFAULT_PAGE_SIZE : requestSize);
	}

}

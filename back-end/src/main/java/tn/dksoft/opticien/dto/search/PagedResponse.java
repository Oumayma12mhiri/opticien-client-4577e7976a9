package tn.dksoft.opticien.dto.search;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PagedResponse<DTO> {
	private List<DTO> content;
	private long count;
	private long totalCount;
}

package tn.dksoft.opticien.dto;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class FournisseurDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String name;

	private String matriculeFiscale;

	private String email;
	
	private String adresse ; 
	
	private String numTel ; 
	
	private CategorieDto categorieDto;

}

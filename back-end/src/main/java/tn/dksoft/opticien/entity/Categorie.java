package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.EqualsAndHashCode.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "t_categorie")
public class Categorie implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;

	private String name;
	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnore
	private List<Divers> divers;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnore
	private List<Lentille> lentille;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnore
	private List<Monture> monture;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnore
	private List<Verre> verre;

	@OneToMany(mappedBy = "categorie")
	@JsonIgnore
	private List<LunetteSolaire> lunettesolaire;

}

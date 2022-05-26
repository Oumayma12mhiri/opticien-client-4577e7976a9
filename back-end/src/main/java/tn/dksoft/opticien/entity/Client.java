package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Include;

@Entity
@Getter
@Setter
@Table(name = "t_client")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Client implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;
	private String reference;
	private String cin;
	private String nomPrenom;
	private LocalDateTime dateNaissance;
	private int age;
	private String email;
	private String adresse;
	private String ville;
	private String pays;
	private String numAssureSocial;
	private String numTel1;
	private String numTel2;
	private BigDecimal chiffreAffaire;
	private BigDecimal solde;
	private String observations;
	private String matriculeFiscal;

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@OneToMany(mappedBy = "client")
	private List<VisiteClient> visiteclient;
	
	@OneToMany(mappedBy = "client")
	private List<Vente> vente;

}

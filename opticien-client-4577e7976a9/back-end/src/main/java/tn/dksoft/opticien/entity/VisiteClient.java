package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
@Table(name = "t_visitclient")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class VisiteClient implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;
	private LocalDateTime date;
	private BigDecimal montantrecu;

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@ManyToOne
	private Client client;
	
	@ManyToOne
	private Vente vente;

}

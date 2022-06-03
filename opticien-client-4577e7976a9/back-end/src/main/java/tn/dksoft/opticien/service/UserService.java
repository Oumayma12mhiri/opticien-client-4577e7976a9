package tn.dksoft.opticien.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.entity.User;
import tn.dksoft.opticien.repository.UserRepository;

@Service
@Slf4j
public class UserService {

	private final UserRepository userRepository ;

	@Autowired
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}
	
	public void addUser(User user) {
		try {
			userRepository.saveAndFlush(user);
		}catch (Exception e) {
			log.error("Cannot add user ", e);
	}
	
	
}}

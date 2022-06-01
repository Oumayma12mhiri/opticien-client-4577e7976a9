package tn.dksoft.opticien.loader;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.entity.Privilege;
import tn.dksoft.opticien.entity.Role;
import tn.dksoft.opticien.entity.User;
import tn.dksoft.opticien.repository.PrivilegeRepository;
import tn.dksoft.opticien.repository.RoleRepository;
import tn.dksoft.opticien.repository.UserRepository;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@Component
public class SetupDataLoader implements
        ApplicationListener<ContextRefreshedEvent> {

    boolean alreadySetup = false;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PrivilegeRepository privilegeRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public void onApplicationEvent(ContextRefreshedEvent event) {

        if (alreadySetup)
            return;
        Privilege userManagement
                = createPrivilegeIfNotFound("USER_MANAGEMENT_PRIVILEGE");
        Privilege giveAdvice
                = createPrivilegeIfNotFound("GIVE_ADVICE_PRIVILEGE");
        Privilege droneSurveillance
                = createPrivilegeIfNotFound("DRONE_SURVEILLANCE_PRIVILEGE");
        Privilege fieldManagement
                = createPrivilegeIfNotFound("FIELD_MANAGEMENT_PRIVILEGE");
        Privilege taskManagement
                = createPrivilegeIfNotFound("TASK_MANAGEMENT_PRIVILEGE");
        Privilege weatherView
                = createPrivilegeIfNotFound("WEATHER_VIEW_PRIVILEGE");
        List<Privilege> adminPrivileges = Arrays.asList(
                userManagement, giveAdvice);
        createRoleIfNotFound("ROLE_ADMIN", adminPrivileges);
        createRoleIfNotFound("ROLE_BASIC_AGRICULTOR", Arrays.asList(fieldManagement, taskManagement, weatherView));
        createRoleIfNotFound("ROLE_PRO_AGRICULTOR", Arrays.asList(fieldManagement, taskManagement, weatherView, droneSurveillance));
        createRoleIfNotFound("ROLE_CUSTOM_AGRICULTOR", Arrays.asList(fieldManagement, taskManagement, weatherView, droneSurveillance));
        if(!userRepository.findByEmail("admin@admin.com").isPresent()){

            User user = new User(null, "admin", "admin", "admin@admin.com", "Admin**123", true, true, Arrays.asList(roleRepository.findByName("ROLE_ADMIN")));
        user.setPassword(passwordEncoder.encode("Admin**123"));
            userRepository.save(user);}
        alreadySetup = true;
    }

    @Transactional
    Privilege createPrivilegeIfNotFound(String name) {

        Privilege privilege = privilegeRepository.findByName(name);
        if (privilege == null) {
            privilege = new Privilege(name);
            privilegeRepository.save(privilege);
        }
        return privilege;
    }

    @Transactional
    Role createRoleIfNotFound(
            String name, Collection<Privilege> privileges) {

        Role role = roleRepository.findByName(name);
        if (role == null) {
            role = new Role(name);
            role.setPrivileges(privileges);
            roleRepository.save(role);
        }
        return role;
    }
}

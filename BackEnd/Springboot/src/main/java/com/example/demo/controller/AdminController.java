package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Admin;
import com.example.demo.repository.AdminRepository;

@CrossOrigin(origins = "http://localhost:1234")
@RestController
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	private AdminRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public Admin create(@Valid @RequestBody Admin admin) {
		repository.save(admin);
		return admin;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Admin> getAllAdmins() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{Username}", method = RequestMethod.GET)
	public Admin getUsername(@PathVariable("Username") String Username) {
		return repository.findByuserName(Username);
	}

	@RequestMapping(value = "/{Username}", method = RequestMethod.PUT)
	public void modifyAdminByUusername(@PathVariable("Username") String Username, @Valid @RequestBody Admin admin) {
		Admin oldAdmin = repository.findByuserName(Username);
		oldAdmin.setPassword(admin.getPassword());
		oldAdmin.setEmail(admin.getEmail());
		repository.save(oldAdmin);
	}

	@RequestMapping(value = "/{Username}", method = RequestMethod.DELETE)
	public void deleteAdmin(@PathVariable String Username) {
		repository.delete(repository.findByuserName(Username));
	}

}

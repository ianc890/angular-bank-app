package com.qa.intergration;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

import com.qa.service.business.AccountService;

@Path("/account")
public class AccountEndpoint {

	private static final Logger LOGGER = Logger.getLogger(AccountEndpoint.class);

	@Inject
	private AccountService service;

	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAllAccounts() {
		LOGGER.info("AccountEndpoint + getAllAccounts");
		return service.getAllAccounts();
	}

	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String addAccount(String account) {
		LOGGER.info("AccountEndpoint + addAccount");
		return service.addAccount(account);
	}
	
	@PUT
	@Path("/json")
	@Produces({ "application/json" })
	@Consumes({ "application/json" })
	public String updateAccount(String account) {
		return service.updateAccount(account);
	}

	@DELETE
	@Path("/json/{id}")
	@Produces({ "application/json" })
	public String deleteAccount(@PathParam("id") Long id) {
		LOGGER.info("AccountEndpoint + deleteAccount");
		return service.deleteAccount(id);

	}

	public void setService(AccountService service) {
		LOGGER.info("AccountEndpoint + setService");
		this.service = service;
	}

}

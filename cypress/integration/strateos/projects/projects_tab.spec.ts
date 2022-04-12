import ProjectsPage from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/robots/strateos/projects/ProjectsPage";
import ProjectTab from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/locators/projects_tab.json";
import Data from "/home/rahuld/Cypress-Projects/cypress-code-push/cypress/fixtures/data/data.json";
context("Project Creating Test", () => {
  const projObj = new ProjectsPage();

  describe("Create a project and add it to favorite list", () => {
    it("login into the strateos application and create a project", () => {
      projObj.openStrateos();
      projObj.login();
      projObj.openProjectsTab(ProjectTab.projects_tab);
      projObj.wait(5000);
      projObj.createNewProject(ProjectTab.create_project_icon);
      projObj.enterProjectName(
        ProjectTab.project_name_input,
        Data.project_name
      );
      projObj.clickOnSubmit(ProjectTab.create_project);
      projObj.openProjectsTab(ProjectTab.projects_tab);
      projObj.isProjectNameSame(
        ProjectTab.project_name_display,
        Data.project_name
      );
      projObj.addProjectToFavorite(ProjectTab.project_favourite_icon);
      projObj.isProjectFavorite(
        ProjectTab.project_star,
        ProjectTab.project_star_active_class
      );
    });
  });
});

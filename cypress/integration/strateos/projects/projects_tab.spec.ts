import ProjectsPage from "/home/rahuld/cypress-testing/cypress-starter-master/cypress/robots/strateos/projects/ProjectsPage";

context("Project Creating Test", () => {
  const projObj = new ProjectsPage();

  describe("Create a project and add it to favorite list", () => {
    it("login into the strateos application and create a project", () => {
      projObj.openStrateos();
      projObj.login();
      projObj.openProjectsTab(
       ".user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link"
     );
      projObj.wait(5000);
      projObj.createNewProject(
       ".project-square--create-new > .project-square__contents"
     );
      projObj.enterProjectName(
        ":nth-child(1) > .validated-input > .validated-input__input > .text-input",
        "Test project"
      );
      projObj.clickOnSubmit(".btn-primary");
      projObj.openProjectsTab(
        ".user-nav-bar__content-left > .subtabs > :nth-child(2) > .subtabs__tab-link"
      );
      projObj.isProjectNameSame(
        ":nth-child(2) > .project-square__contents > .project-square__header-content > .project-square__headers > .project-square__header > .highlighted > span",
        "Test project"
      );
      projObj.addProjectToFavorite(
        ":nth-child(2) > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon"
      );
      projObj.isProjectFavorite(
        ".project-square--hovered > .project-square__contents > .project-square__header-content > div.project-square__favorite-icon > .project-square__favorite-icon",
        "project-square__favorite-icon--active"
      );
    });
  });
});

import { createChat } from "../../support/ChatCreationOrchestrator";
import "../../support/commands";
import { navigateChatPage, navigateHomePage } from "../../support/object_locators/nav";
import {
  COUNSELOR_STATUS_ITEMS,
  setCounselorStatus,
} from "../../support/object_locators/status_dropdown";
import { pickConversationByWhatsGoingOn, sendMessageCurrentChat, validateChatAvailable, openFirstChat, validateMessageChat } from "../../support/object_locators/tasksAndChats";
import { buildPrechatAttributes } from "../../support/prechat_utils";
import { deleteActiveTasks } from "../../support/youth_chat/Task";

describe("Check consistency between 2 chats messages", () => {
  let prechatAttributes, prechatAttributes2;
  let identity1 = "Chat #1";
  let identity2 = "Chat #2";
  let chatId, chat2Id;

  before("Fetches the prechat values used in all scenarios", () => {
    cy.loginByOktaUI(
      Cypress.env("counselors")[0].username,
      Cypress.env("counselors")[0].password
    );
  })

  beforeEach("Logs in and loads prechat_values fixture", () => {
    cy.fixture("prechat_values").then((prechat_template) => {
      chatId = `GCP-TC-81-${Date.now()}_Automation_Testing`;
      prechat_template.prechatJson.prechatFormAnswer = chatId;
      prechatAttributes = buildPrechatAttributes(
        prechat_template,
        Cypress.env("counselors")[0].username
      );
    });
    cy.cleanupUIAfterLogin();
    //deleteActiveTasks();
  });

  context(
    "EC-TC-xxx Chat Experience - Verify user is able to save case record answers in 2 active chats",
    () => {
      it(
        "Should Get a Chat #1 notification. accept it, send a message and validate it",
        { defaultCommandTimeout: 14000 },
        () => {
          setCounselorStatus(COUNSELOR_STATUS_ITEMS.Available);
          createChat(identity1, prechatAttributes);
          navigateChatPage();
          pickConversationByWhatsGoingOn(chatId);
          validateChatAvailable();
          sendMessageCurrentChat(identity1)
          validateMessageChat(identity1);
          setCounselorStatus(COUNSELOR_STATUS_ITEMS.Available);
          navigateHomePage();
          cy.wait(6000)
        });

      it(
        "Should Get a Chat #2 notification. accept it, send a message and validate it",
        { defaultCommandTimeout: 14000 },
        () => {

          cy.fixture("prechat_values").then((prechat_template2) => {
            chat2Id = `GCP-TC-81-${Date.now()}_Second_Automation_Testing`;
            prechat_template2.prechatJson.prechatFormAnswer = chat2Id;
            prechatAttributes2 = buildPrechatAttributes(
              prechat_template2,
              Cypress.env("counselors")[0].username
            );
            createChat(identity2, prechatAttributes2);
            navigateChatPage();
            openFirstChat();
            setCounselorStatus(COUNSELOR_STATUS_ITEMS.Available);
            pickConversationByWhatsGoingOn(chat2Id);
            validateChatAvailable();

            sendMessageCurrentChat(identity2)
            navigateHomePage();
            navigateChatPage();
            validateMessageChat(identity2);
          });
        });
    }
  );
});
import {
  CLOSE_CONFIRMATION_MODAL,
  CONTINUE_WITH_SELECTED_COUNSELOR,
  SELECT_TRANSFER_COUNSELOR,
  SUBMIT_TRANSFER,
  TRANSFER_DETAILS_INPUT,
} from "./transfers";

export const CLOSE_CASE_BUTTON = '[data-testid="close-case-button"]';
export const CANCEL_ACTION_BUTTON = ".text-btn";
export const CONFIRM_ACTION_BUTTON = ".danger-btn";
export const ACCEPT_CHAT_BUTTON = '[data-testid="accept-chat"]';
export const DECLINE_CHAT_BUTTON = '[data-testid="decline-chat-request"]';
export const END_CALL_BUTTON = '[data-testid="end-call-button"]';
export const TRANSFER_CALL_BUTTON = '[data-testid="transfer-call-button"]';
export const CHAT_INPUT_AREA = ".Twilio-MessageInputArea-TextArea > textarea";
export const CHAT_CASE_TIMER = '[data-testid="chat-case-timer"]';
export const TWILIO_IFRAME = "main > :nth-child(4) > iframe";
export const COUNSELOR_MESSAGE =
  '[data-testid="counselor-sent-message"] > span';
export const YOUTH_MESSAGE = '[data-testid="youth-sent-message"] > span';
export const QUEUE_PRIORITY_LABEL = '[data-testid="queue-level"]';
export const INCOMING_CHATS_BADGE = '[data-testid="incoming-badge"]';
export const CHAT_LIST = "div.Twilio-TaskList-default > div h3";
export const CASE_FORM_CONTAINER = ".CaseRecordContainer-form";
export const CHAT_END_MESSAGE = "span.MessageCanvasTrayContent";
export const CASE_NUMBER = ".TasksCaseNumber";
export const INCOMING_CHATS_LABEL = 'div[data-testid="incoming-badge"]';
export const PRECHAT_FORM_ANSWER_FIELD = '[data-testid="prechat-form-answer"]';
export const CHAT_TEXTAREA = "textarea[placeholder]";


export function enterFrame(iframe) {
  Cypress.$(iframe).attr("display", "flex");
  cy.enter(iframe).then((iframe) => iframe);
}

export function acceptChat() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe()
      .find(ACCEPT_CHAT_BUTTON, { timeout: 55000 })
      .first()
      .should("exist")
      .click({ force: true });
  });
}

export function endChat() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(END_CALL_BUTTON).should("exist").click({ force: true });
    cy.get(CONFIRM_ACTION_BUTTON).click();
    iframe().find(CHAT_END_MESSAGE).should("exist");
  });
}

export function getCaseNumber() {
  return cy.enter(TWILIO_IFRAME).then((iframe) => {
    return iframe()
      .find(CASE_NUMBER)
      .then((element) => {
        return element.text().trim();
      });
  });
}

export function pickConversationByWhatsGoingOn(text) {
  return cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(INCOMING_CHATS_LABEL).should("exist");
    iframe()
      .find(CHAT_LIST).parent()
      .should("exist")
      .each((el) => {
        cy.wrap(el).should("exist").click({ force: true });
        iframe()
          .find(PRECHAT_FORM_ANSWER_FIELD)
          .first()
          .invoke("text")
          .then((textElement) => {
            cy.wait(5000)
            if (textElement === text) {
              iframe().find(ACCEPT_CHAT_BUTTON).first().should("exist").click({ force: true });
              return false;
            }
          });
      });
  });
}

export function validateChatAvailable() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CHAT_TEXTAREA).should("exist");
  });
}

export function openFirstChat() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CHAT_LIST).parent().first().should("exist").click({ force: true });
  });
}

export function validateMessageChat(text) {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(COUNSELOR_MESSAGE).parent().first().should("exist").contains(text);
  });
}

export function sendMessageCurrentChat(messsage) {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CHAT_TEXTAREA).type(messsage + "{enter}");
  });
}

export function closeCaseRecord() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CLOSE_CASE_BUTTON).should("exist").click({ force: true });
    cy.get(CONFIRM_ACTION_BUTTON).click();
    cy.get(CASE_FORM_CONTAINER).should("not.exist");
  });
}
export function declineChat() {
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(DECLINE_CHAT_BUTTON).click({ force: true });
  });
}
export function transferActiveChatTo(counselor, message) {
  expect(message).not.to.equal(undefined);
  cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(TRANSFER_CALL_BUTTON).click({ force: true });
    cy.contains(counselor.name)
      .parent()
      .siblings(SELECT_TRANSFER_COUNSELOR)
      .click();
    cy.get(CONTINUE_WITH_SELECTED_COUNSELOR).click();
    cy.get(TRANSFER_DETAILS_INPUT).should("be.visible").type(message);
    cy.get(SUBMIT_TRANSFER).click();
    cy.get(CLOSE_CONFIRMATION_MODAL).click();
  });
}
export function getChatInput() {
  return cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CHAT_INPUT_AREA);
  });
}
export function getCloseCaseButton() {
  return cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(CLOSE_CASE_BUTTON);
  });
}
export function getAcceptChatButton() {
  return cy.enter(TWILIO_IFRAME).then((iframe) => {
    iframe().find(ACCEPT_CHAT_BUTTON);
  });
}

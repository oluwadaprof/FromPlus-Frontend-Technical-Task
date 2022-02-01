import { ActionTypes } from "../constants/action-types";

export const setTemplates = (templates) => {
    return {
        type: ActionTypes.SET_TEMPLATES,
        payload: templates
    };
};

export const allTemplates = (templates) => {
    return {
        type: ActionTypes.ALL_TEMPLATES,
        payload: templates
    };
};

export const sortedTemplatesCategory = (templates) => {
    return {
        type: ActionTypes.SORTED_TEMPLATES_CATEGORY,
        payload: templates
    };
};
export const sortedTemplatesOrder = (templates) => {
    return {
        type: ActionTypes.SORTED_TEMPLATES_ORDER,
        payload: templates
    };
};
export const sortedTemplatesDate = (templates) => {
    return {
        type: ActionTypes.SORTED_TEMPLATES_DATE,
        payload: templates
    };
};
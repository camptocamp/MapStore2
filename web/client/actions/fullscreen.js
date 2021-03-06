/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


/**
 * Actions for FullScreen Plugin.
 * @name actions.fullscreen
 */

export const TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN";
/**
 * when fullscreen have to be toggled
 * @memberof actions.fullscreen
 * @param  {boolean} enable          true for enable, false for disable
 * @param  {string} querySelector querySelector string to use to get the element to fullscreen.
 * @return {action}                   the action of type `TOGGLE_FULLSCREEN` with enable flag and element selector.
 */
export function toggleFullscreen(enable, querySelector) {
    return {
        type: TOGGLE_FULLSCREEN,
        enable,
        querySelector
    };
}

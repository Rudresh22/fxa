/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// test the service-name library
'use strict';

define([
  'chai',
  'lib/translator',
  'lib/service-name'
],
function (chai, Translator, ServiceName) {
  /*global describe, it*/
  var assert = chai.assert;
  var serviceName;

  describe('lib/service-name', function () {
    beforeEach(function () {
      var translator = new Translator();
      serviceName = new ServiceName(translator);
    });
    it('converts a service to the service name', function () {
      assert.equal(serviceName.get('sync'), 'Firefox Sync');
    });
  });

});

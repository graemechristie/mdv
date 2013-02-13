// Copyright 2013 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
  var thisFile = 'mdv.js';
  var libLocation = '';

  function write(inSrc) {
    document.write('<script src="' + libLocation + inSrc + '"></script>');
  }

  var script = document.querySelector('script[src $= "' + thisFile + '"]');
  if (script)
    libLocation = script.src.slice(0, -thisFile.length);

  document.write('<link rel="stylesheet" href="' +
      libLocation + 'template_element.css">');

  [
    '../third_party/ChangeSummary/change_summary.js',
    'compat.js',
    'side_table.js',
    'model.js',
    'script_value_binding.js',
    'text_replacements_binding.js',
    'element_attribute_bindings.js',
    'element_bindings.js',
    'input_bindings.js',
    'template_element.js',
    'delegates.js'
  ].forEach(write);
})();
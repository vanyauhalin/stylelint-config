const rules = {
  /**
   * Disallow invalid hex colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-no-invalid-hex
   */
  'color-no-invalid-hex': true,
  /**
   * Disallow duplicate font family names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/font-family-no-duplicate-names
   */
  'font-family-no-duplicate-names': true,
  /**
   * Disallow missing generic families in lists of font family names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/font-family-no-missing-generic-family-keyword
   */
  'font-family-no-missing-generic-family-keyword': true,
  /**
   * Disallow invalid named grid areas.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/named-grid-areas-no-invalid
   */
  'named-grid-areas-no-invalid': true,
  /**
   * Disallow an unspaced operator within `calc` functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-calc-no-unspaced-operator
   */
  'function-calc-no-unspaced-operator': true,
  /**
   * Disallow direction values in `linear-gradient()` calls that are not valid
   * according to the standard syntax.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-linear-gradient-no-nonstandard-direction
   */
  'function-linear-gradient-no-nonstandard-direction': true,
  /**
   * Disallow unknown functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-no-unknown
   */
  'function-no-unknown': true,
  /**
   * Disallow (unescaped) newlines in strings.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/string-no-newline
   */
  'string-no-newline': true,
  /**
   * Disallow unknown units.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/unit-no-unknown
   */
  'unit-no-unknown': true,
  /**
   * Disallow missing `var` function for custom properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/custom-property-no-missing-var-function
   */
  'custom-property-no-missing-var-function': true,
  /**
   * Disallow unknown properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/property-no-unknown
   */
  'property-no-unknown': true,
  /**
   * Disallow `!important` within keyframe declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/keyframe-declaration-no-important
   */
  'keyframe-declaration-no-important': true,
  /**
   * Disallow duplicate selectors within keyframe blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/keyframe-block-no-duplicate-selectors
   */
  'keyframe-block-no-duplicate-selectors': true,
  /**
   * Disallow duplicate custom properties within declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-duplicate-custom-properties
   */
  'declaration-block-no-duplicate-custom-properties': true,
  /**
   * Disallow duplicate properties within declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-duplicate-properties
   */
  'declaration-block-no-duplicate-properties': true,
  /**
   * Disallow shorthand properties that override related longhand properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-shorthand-property-overrides
   */
  'declaration-block-no-shorthand-property-overrides': true,
  /**
   * Disallow empty blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-no-empty
   */
  'block-no-empty': true,
  /**
   * Disallow unknown pseudo-class selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-class-no-unknown
   */
  'selector-pseudo-class-no-unknown': true,
  /**
   * Disallow unknown pseudo-element selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-element-no-unknown
   */
  'selector-pseudo-element-no-unknown': true,
  /**
   * Disallow unknown type selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-type-no-unknown
   */
  'selector-type-no-unknown': true,
  /**
   * Disallow unknown media feature names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-name-no-unknown
   */
  'media-feature-name-no-unknown': true,
  /**
   * Disallow unknown at-rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-no-unknown
   */
  'at-rule-no-unknown': true,
  /**
   * Disallow empty comments.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/comment-no-empty
   */
  'comment-no-empty': true,
  /**
   * Disallow selectors of lower specificity from coming after overriding
   * selectors of higher specificity.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-descending-specificity
   */
  'no-descending-specificity': true,
  /**
   * Disallow duplicate `@import` rules within a stylesheet.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-duplicate-at-import-rules
   */
  'no-duplicate-at-import-rules': true,
  /**
   * Disallow duplicate selectors within a stylesheet.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-duplicate-selectors
   */
  'no-duplicate-selectors': true,
  /**
   * Disallow empty sources.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-empty-source
   */
  'no-empty-source': true,
  /**
   * Disallow double-slash comments (`//...`) which are not supported by CSS.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-invalid-double-slash-comments
   */
  'no-invalid-double-slash-comments': true,
  /**
   * Disallow invalid position `@import` rules within a stylesheet.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-invalid-position-at-import-rule
   */
  'no-invalid-position-at-import-rule': true,
  /**
   * Specify percentage or number notation for alpha-values.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/alpha-value-notation
   */
  'alpha-value-notation': 'number',
  /**
   * Specify number or angle notation for degree hues.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/hue-degree-notation
   */
  'hue-degree-notation': 'number',
  /**
   * Specify modern or legacy notation for applicable color-functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-function-notation
   */
  'color-function-notation': 'modern',
  /**
   * Require or disallow alpha channel for hex colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-hex-alpha
   */
  'color-hex-alpha': 'always',
  /**
   * Specify short or long notation for hex colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-hex-length
   */
  'color-hex-length': 'long',
  /**
   * Require (where possible) or disallow named colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-named
   */
  'color-named': 'never',
  /**
   * Disallow hex colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-no-hex
   */
  'color-no-hex': true,
  /**
   * Disallow units for zero lengths.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/length-zero-no-unit
   */
  'length-zero-no-unit': true,
  /**
   * Specify whether or not quotation marks should be used around font family
   * names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/font-family-name-quotes
   */
  'font-family-name-quotes': 'always-where-required',
  /**
   * Require numeric or named (where possible) `font-weight` values.
   * Also, when named values are expected, require only valid names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/font-weight-notation
   */
  'font-weight-notation': 'named-where-possible',
  /**
   * Disallow scheme-relative urls.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-url-no-scheme-relative
   */
  'function-url-no-scheme-relative': true,
  /**
   * Require or disallow quotes for urls.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-url-quotes
   */
  'function-url-quotes': 'never',
  /**
   * Limit the number of decimal places allowed in numbers.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/number-max-precision
   */
  'number-max-precision': 4,
  /**
   * Disallow redundant values in shorthand properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/shorthand-property-no-redundant-values
   */
  'shorthand-property-no-redundant-values': true,
  /**
   * Disallow vendor prefixes for values.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-no-vendor-prefix
   */
  'value-no-vendor-prefix': true,
  /**
   * Disallow vendor prefixes for properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/property-no-vendor-prefix
   */
  'property-no-vendor-prefix': true,
  /**
   * Disallow `!important` within declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-no-important
   */
  'declaration-no-important': true,
  /**
   * Disallow longhand properties that can be combined into one shorthand
   * property.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-redundant-longhand-properties
   */
  'declaration-block-no-redundant-longhand-properties': true,
  /**
   * Limit the number of declarations within a single-line declaration block.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-single-line-max-declarations
   */
  'declaration-block-single-line-max-declarations': 1,
  /**
   * Require or disallow quotes for attribute values.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-attribute-quotes
   */
  'selector-attribute-quotes': 'never',
  /**
   * Disallow vendor prefixes for selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-no-vendor-prefix
   */
  'selector-no-vendor-prefix': true,
  /**
   * Specify simple or complex notation for `:not()` pseudo-classes.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-not-notation
   */
  'selector-not-notation': 'simple',
  /**
   * Specify single or double colon notation for applicable pseudo-elements.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-element-colon-notation
   */
  'selector-pseudo-element-colon-notation': 'double',
  /**
   * Disallow vendor prefixes for media feature names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-name-no-vendor-prefix
   */
  'media-feature-name-no-vendor-prefix': true,
  /**
   * Disallow vendor prefixes for at-rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-no-vendor-prefix
   */
  'at-rule-no-vendor-prefix': true,
  /**
   * Disallow irregular whitespaces.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-irregular-whitespace
   */
  'no-irregular-whitespace': true,
  /**
   * Require or disallow the Unicode Byte Order Mark.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/unicode-bom
   */
  'unicode-bom': 'never',
  /**
   * Specify lowercase or uppercase for keywords values.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-keyword-case
   */
  'value-keyword-case': 'lower',
  /**
   * Specify lowercase or uppercase for function names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-name-case
   */
  'function-name-case': 'lower',
  /**
   * Require or disallow an empty line before custom properties.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/custom-property-empty-line-before
   */
  'custom-property-empty-line-before': 'never',
  /**
   * Specify lowercase or uppercase for type selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-type-case
   */
  'selector-type-case': 'lower',
  /**
   * Require or disallow an empty line before rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/rule-empty-line-before
   */
  'rule-empty-line-before': ['always', {
    except: [
      'after-single-line-comment',
      'first-nested',
    ],
  }],
  /**
   * Require or disallow an empty line before at-rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-empty-line-before
   */
  'at-rule-empty-line-before': ['always', {
    ignoreAtRules: ['apply', 'import'],
  }],
  /**
   * Require or disallow an empty line before comments.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/comment-empty-line-before
   */
  'comment-empty-line-before': ['always', {
    except: ['first-nested'],
  }],
  /**
   * Require or disallow whitespace on the inside of comment markers.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/comment-whitespace-inside
   */
  'comment-whitespace-inside': 'always',
  /**
   * Specify lowercase or uppercase for hex colors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/color-hex-case
   */
  'color-hex-case': 'lower',
  /**
   * Require a newline or disallow whitespace after the commas of functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-comma-newline-after
   */
  'function-comma-newline-after': 'never-multi-line',
  /**
   * Require a newline or disallow whitespace before the commas of functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-comma-newline-before
   */
  'function-comma-newline-before': 'never-multi-line',
  /**
   * Require a single space or disallow whitespace after the commas of
   * functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-comma-space-after
   */
  'function-comma-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the commas of
   * functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-comma-space-before
   */
  'function-comma-space-before': 'never',
  /**
   * Limit the number of adjacent empty lines within functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-max-empty-lines
   */
  'function-max-empty-lines': 0,
  /**
   * Require a newline or disallow whitespace on the inside of the parentheses
   * of functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-parentheses-newline-inside
   */
  'function-parentheses-newline-inside': 'always-multi-line',
  /**
   * Require a single space or disallow whitespace on the inside of the
   * parentheses of functions.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/function-parentheses-space-inside
   */
  'function-parentheses-space-inside': 'never',
  /**
   * Require or disallow a leading zero for fractional numbers less than 1.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/number-leading-zero
   */
  'number-leading-zero': 'never',
  /**
   * Disallow trailing zeros in numbers.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/number-no-trailing-zeros
   */
  'number-no-trailing-zeros': true,
  /**
   * Specify single or double quotes around strings.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/string-quotes
   */
  'string-quotes': 'single',
  /**
   * Specify lowercase or uppercase for units
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/unit-case
   */
  'unit-case': 'lower',
  /**
   * Require a newline or disallow whitespace after the commas of value lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-list-comma-newline-after
   */
  'value-list-comma-newline-after': 'always-multi-line',
  /**
   * Require a newline or disallow whitespace before the commas of value lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-list-comma-newline-before
   */
  'value-list-comma-newline-before': 'always-multi-line',
  /**
   * Require a single space or disallow whitespace after the commas of value
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-list-comma-space-after
   */
  'value-list-comma-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the commas of value
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-list-comma-space-before
   */
  'value-list-comma-space-before': 'never',
  /**
   * Limit the number of adjacent empty lines within value lists
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/value-list-max-empty-lines
   */
  'value-list-max-empty-lines': 0,
  /**
   * Specify lowercase or uppercase for properties
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/property-case
   */
  'property-case': 'lower',
  /**
   * Require a single space or disallow whitespace after the bang of
   * declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-bang-space-after
   */
  'declaration-bang-space-after': 'never',
  /**
   * Require a single space or disallow whitespace before the bang of
   * declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-bang-space-before
   */
  'declaration-bang-space-before': 'always',
  /**
   * Require a newline or disallow whitespace after the colon of declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-colon-newline-after
   */
  'declaration-colon-newline-after': 'always-multi-line',
  /**
   * Require a single space or disallow whitespace after the colon of
   * declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-colon-space-after
   */
  'declaration-colon-space-after': 'always-single-line',
  /**
   * Require a single space or disallow whitespace before the colon of
   * declarations
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-colon-space-before
   */
  'declaration-colon-space-before': 'never',
  /**
   * Require or disallow an empty line before declarations.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-empty-line-before
   */
  'declaration-empty-line-before': 'never',
  /**
   * Require a newline or disallow whitespace after the semicolons of
   * declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-semicolon-newline-after
   */
  'declaration-block-semicolon-newline-after': 'always',
  /**
   * Require a newline or disallow whitespace before the semicolons of
   * declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-semicolon-newline-before
   */
  'declaration-block-semicolon-newline-before': 'never-multi-line',
  /**
   * Require a single space or disallow whitespace after the semicolons of
   * declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-semicolon-space-after
   */
  'declaration-block-semicolon-space-after': 'always-single-line',
  /**
   * Require a single space or disallow whitespace before the semicolons of
   * declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-semicolon-space-before
   */
  'declaration-block-semicolon-space-before': 'never',
  /**
   * Require or disallow a trailing semicolon within declaration blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-trailing-semicolon
   */
  'declaration-block-trailing-semicolon': 'always',
  /**
   * Require or disallow an empty line before the closing brace of blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-empty-line-before
   */
  'block-closing-brace-empty-line-before': 'never',
  /**
   * Require a newline or disallow whitespace after the closing brace of blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-newline-after
   */
  'block-closing-brace-newline-after': 'always',
  /**
   * Require a newline or disallow whitespace before the closing brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-newline-before
   */
  'block-closing-brace-newline-before': 'always',
  /**
   * Require a single space or disallow whitespace after the closing brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-space-after
   */
  'block-closing-brace-space-after': 'never-single-line',
  /**
   * Require a single space or disallow whitespace before the closing brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-space-before
   */
  'block-closing-brace-space-before': 'always-single-line',
  /**
   * Require a newline after the opening brace of blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-opening-brace-newline-after
   */
  'block-opening-brace-newline-after': 'always',
  /**
   * Require a newline or disallow whitespace before the opening brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-opening-brace-newline-before
   */
  'block-opening-brace-newline-before': 'never-single-line',
  /**
   * Require a single space or disallow whitespace after the opening brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-opening-brace-space-after
   */
  'block-opening-brace-space-after': 'always-single-line',
  /**
   * Require a single space or disallow whitespace before the closing brace of
   * blocks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/block-closing-brace-space-before
   */
  'block-opening-brace-space-before': 'always',
  /**
   * Require a single space or disallow whitespace on the inside of the brackets
   * within attribute selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-attribute-brackets-space-inside
   */
  'selector-attribute-brackets-space-inside': 'never',
  /**
   * Require a single space or disallow whitespace after operators within
   * attribute selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-attribute-operator-space-after
   */
  'selector-attribute-operator-space-after': 'never',
  /**
   * Require a single space or disallow whitespace before operators within
   * attribute selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-attribute-operator-space-before
   */
  'selector-attribute-operator-space-before': 'never',
  /**
   * Require a single space or disallow whitespace after the combinators of
   * selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-combinator-space-after
   */
  'selector-combinator-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the combinators of
   * selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-combinator-space-before
   */
  'selector-combinator-space-before': 'always',
  /**
   * Disallow non-space characters for descendant combinators of selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-descendant-combinator-no-non-space
   */
  'selector-descendant-combinator-no-non-space': true,
  /**
   * Limit the number of adjacent empty lines within selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-max-empty-lines
   */
  'selector-max-empty-lines': 0,
  /**
   * Specify lowercase or uppercase for pseudo-class selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-class-case
   */
  'selector-pseudo-class-case': 'lower',
  /**
   * Require a single space or disallow whitespace on the inside of the
   * parentheses within pseudo-class selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-class-parentheses-space-inside
   */
  'selector-pseudo-class-parentheses-space-inside': 'never',
  /**
   * Specify lowercase or uppercase for pseudo-element selectors.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-pseudo-element-case
   */
  'selector-pseudo-element-case': 'lower',
  /**
   * Require a newline or disallow whitespace after the commas of selector
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-list-comma-newline-after
   */
  'selector-list-comma-newline-after': 'always',
  /**
   * Require a newline or disallow whitespace before the commas of selector
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-list-comma-newline-before
   */
  'selector-list-comma-newline-before': 'never-multi-line',
  /**
   * Require a single space or disallow whitespace after the commas of selector
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-list-comma-space-after
   */
  'selector-list-comma-space-after': 'always-single-line',
  /**
   * Require a single space or disallow whitespace before the commas of selector
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-list-comma-space-before
   */
  'selector-list-comma-space-before': 'never',
  /**
   * Require a single space or disallow whitespace after the colon in media
   * features.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-colon-space-after
   */
  'media-feature-colon-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the colon in media
   * features.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-colon-space-before
   */
  'media-feature-colon-space-before': 'never',
  /**
   * Specify lowercase or uppercase for media feature names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-name-case
   */
  'media-feature-name-case': 'lower',
  /**
   * Require a single space or disallow whitespace on the inside of the
   * parentheses within media features.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-parentheses-space-inside
   */
  'media-feature-parentheses-space-inside': 'never',
  /**
   * Require a single space or disallow whitespace after the range operator in
   * media features.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-range-operator-space-after
   */
  'media-feature-range-operator-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the range operator in
   * media features.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-feature-range-operator-space-before
   */
  'media-feature-range-operator-space-before': 'always',
  /**
   * Require a newline or disallow whitespace after the commas of media query
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-query-list-comma-newline-after
   */
  'media-query-list-comma-newline-after': 'always',
  /**
   * Require a newline or disallow whitespace before the commas of media query
   * lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-query-list-comma-newline-before
   */
  'media-query-list-comma-newline-before': 'never-multi-line',
  /**
   * Require a single space or disallow whitespace after the commas of media
   * query lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-query-list-comma-space-after
   */
  'media-query-list-comma-space-after': 'always',
  /**
   * Require a single space or disallow whitespace before the commas of media
   * query lists.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/media-query-list-comma-space-before
   */
  'media-query-list-comma-space-before': 'never',
  /**
   * Specify lowercase or uppercase for at-rules names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-name-case
   */
  'at-rule-name-case': 'lower',
  /**
   * Require a newline after at-rule names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-name-newline-after
   */
  'at-rule-name-newline-after': 'always-multi-line',
  /**
   * Require a single space after at-rule names.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-name-space-after
   */
  'at-rule-name-space-after': 'always-single-line',
  /**
   * Require a newline after the semicolon of at-rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-semicolon-newline-after
   */
  'at-rule-semicolon-newline-after': 'always',
  /**
   * Require a single space or disallow whitespace before the semicolons of
   * at-rules.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/at-rule-semicolon-space-before
   */
  'at-rule-semicolon-space-before': 'never',
  /**
   * Specify indentation.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/indentation
   */
  indentation: 2,
  /**
   * Specify unix or windows linebreaks.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/linebreaks
   */
  linebreaks: 'unix',
  /**
   * Limit the number of adjacent empty lines.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/max-empty-lines
   */
  'max-empty-lines': 1,
  /**
   * Disallow end-of-line whitespace.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-eol-whitespace
   */
  'no-eol-whitespace': true,
  /**
   * Disallow missing end-of-source newlines.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-missing-end-of-source-newline
   */
  'no-missing-end-of-source-newline': true,
  /**
   * Disallow empty first lines.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-empty-first-line
   */
  'no-empty-first-line': true,
  /**
   * Disallow extra semicolons.
   * @see https://github.com/stylelint/stylelint/blob/main/lib/rules/no-extra-semicolons
   */
  'no-extra-semicolons': true,
};

exports.rules = rules;

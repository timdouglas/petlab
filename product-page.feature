Feature: Product Page

  Scenario: User can view a table of products
    When User opens the product page
    Then User sees a loading state
    When The loading state has disappeared
    Then The user can see a table of products
    And The table has columns:
      | Columns            |
      | Product            |
      | Vendor             |
      | Tags               |
      | Price              |
      | Subscription price |

  Scenario Outline: User can view more products on the table
    Given The product table has loaded
    When The user clicks on the "arrow" pagination arrow
    Then The "page" products are shown in the table
    When The user changes the 'Rows per page' value
    Then The table updates to show the number of rows selected
    Examples:
      | arrow    | page          |
      | next     | next page     |
      | previous | previous page |
      | first    | first page    |
      | last     | last page     |

  Scenario Outline: User can see filters on the product page
    When User opens the product page
    Then The User can see the filter sidebar
    And The sidebar contains the following filters:
      | Filters      |
      | Search       |
      | Tags         |
      | Price        |
      | Subscription |

  Scenario Outline: User can filter the product table by search
    Given The product table has loaded
    When User enters "search" into the search filter
    Then "results" rows are shown in the product table
    Examples:
      | search   | results |
      | chews    | 7       |
      | dental   | 2       |
      | squirrel | 0       |

  Scenario Outline: User can filter the product table by tag
    Given The product table has loaded
    When User selects "tag" on the tag filter
    Then "results" rows are shown in the product table
    Examples:
      | search | results |
      | Dog    | 11      |
      | Cat    | 6       |

  Scenario Outline: User can filter the product table by price
    Given The product table has loaded
    When User enters "search" into the search filter
    Then "results" rows are shown in the product table
    Examples:
      | search  | results |
      | 30      | 1       |
      | 42.29   | 7       |
      | 9999999 | 0       |

  Scenario: User can filter the product table by subscription
    Given The product table has loaded
    When User checks the subscription filter checkbox
    Then 7 rows are shown in the product table

  Scenario: User can combine filters
    Given The product table has loaded
    When The user enables the subscription filter
    And The user selects 'Cat' in the tag filter
    Then 5 rows are shown in the product table

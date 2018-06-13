var filters = [{
  "name": "Bloaters",
  "description":
    "Bloaters are usually code which has grown to a considerable \
    size that makes it difficult to work with and maintain in the \
    long run. These could be methods as well as classes. These \
    type of smells are not very evident right away. Instead, they \
    start to grow over time, as the software evolves. Conscious \
    effort is required by someone to make sure these type of smells \
    are eradicated as an when possible and not ignored forever."
}, {
  "name": "Tool Abusers",
  "description":
    "Our primary programming paradigm in this context \
    is object-oriented programming. These abusers are \
    smells that are incorrect, inappropriate or sometimes incomplete \
    applications of principles of object-orientated programming. \
    Knowing things and unnecessarily applying them to places where \
    they could be hazardous is not a sound way of approaching solutions."
}, {
  "name": "Change Preventers",
  "description":
    "Change preventers literally prevent code masters from making meaningful \
    and required changes. These smells suggest that if you need to change \
    something in one place of your code, you have to make significant \
    changes in other areas too. As a result of which, the development \
    cost goes up making it expensive and complicated."
}, {
  "name": "Dispensables",
  "description":
    "Dispensables are smells that represents things are not vital \
    to the code. In other words, things that are pointless and unneeded. \
    The code becomes cleaner, efficient and straightforward if \
    these dispensable code pieces are removed. Which also enhances \
    its readability."
}, {
  "name": "Couplers",
  "description":
    "Coupler smells represent the attraction behavior of two classes \
    which could be called excessive. The way the code design helps in \
    contributing to this excessive coupling between classes. Also, the \
    smell could occur when disproportionate delegation happens from \
    one class to another."
}];

var codesmells = [{
  "name": "Alternative Classes with Different Interfaces",
	"category": "Tool Abusers",
	"excerpt": "Classes performing same functions but have different method names.",
  "description": "This smells occurs when there are two or more classes that performs \
    identical function or operation during an action but have different method names for the same.",
  "reasons": "This happens when a programmer who created one of the classes might \
    be unaware of the class that have a same functionality. Due to this \
    ignorance the programmer tends to create a new class or method that \
    exhibit equivalent functionality.",
  "refactorings": "If you can find the similarities between the two classes, you can \
    often refactor the classes to make them share a common interface. Rename methods \
    to a common name in all the classes. Move them, add parameters and inject objects \
    to enable them to be moved to a common interface. You may move the methods to a \
    super-class and existing classes will become sub-classes. Its normal to come to \
    a point where certain class seems to be redundant and easily removable.",
  "references": "Move Method (Fowler, 142), Rename Method (Fowler, 273)"
}, {
  "name": "Comments",
  "category": "Dispensables",
  "excerpt": "Methods or classes filled with explanatory comments.",
  "description": "Comments are created near the code to provide elaborate discussion about it. \
    These are wisely positioned and decorated, but not necessarily required.",
  "reasons": "These are written when the code master feels the need to explain \
    the code as it is not very intuitive or straightforward. Such situations are \
    not natural but human-made. Sometimes, hiding the holes in the fishy code \
    that could be improved. Changing the structure of the code or better naming \
    could make comments unnecessary.",
  "refactorings": "If the comment talks about the section of code and explains it in \
    further details, this section can be extracted as a method with a name that \
    describes the code better. Expressions which needs comments to clarify further \
    the operations happening within it could be extracted as separate variables with \
    their subexpressions. Methods that carry comments with them are in need of a \
    self-explanatory name, so please rename them. If some assumptions are required \
    to allow code to word correct, check the assumptions directly instead of putting \
    them as comments.",
  "references": "Extract Method (Fowler, 110), Introduce Assertion (Fowler 267), \
    Rename Method (Fowler, 273)",
}, {
  "name": "Data Class",
  "category": "Dispensables",
  "excerpt": "Class responsible only for holding fields and accessor methods without \
    having additional functionality to operate on the data they own.",
  "description": "These classes have data fields, and corresponding is getting and \
    setting methods to read and modify that data. These methods are also called crude \
    methods. These are merely used as containers of data required by other classes. \
    These classes being dumb, are almost certainly being manipulated in far too much \
    detail by others.",
  "reasons": "These classes are the result of in-process extraction of objects as data \
    objects but never get their operations. These classes are created by having public \
    fields and accessing methods (getters and setters), not considering the real power \
    of objects being into their behavior to operate and manage their data because they \
    know it better.",
  "refactorings": "If there are only public fields in such data classes, try to \
    encapsulate the fields by allowing the external access just using getter and \
    setter methods. Also, for data collection objects encapsulate the collection \
    and add methods to make any changes to this collection (adding/deleting elements). \
    In cases where the clients are using the data directly and doing their operations \
    on this data, try investigating these client usages and classes. There might be \
    possibilities where the functionality from client class could be extracted or \
    moved to the data class itself. Making the data class more valuable to other \
    users as well. As we walk away from pure data classes, we may want to rethink \
    the needs of the underlying getter and setter methods. In many cases, these \
    broad access methods are not required and should be either removed or hidden.",
  "references": "Move Method (Fowler, 142), Encapsulate Field (Fowler, 206), \
    Encapsulate Collection (Fowler, 208)",
}, {
  "name": "Data Clumps",
  "category": "Bloaters",
  "excerpt": "Pieces of information that flows together across methods or classes.",
  "description": "Bunches of data that come along together as a group whereever \
    you see them in the code, they are probably data clumps. Removing certain \
    data part makes the other part unusable or in some cases, it makes no sense. \
    This is exactly the situation where these data pieces are crying hard to be \
    noticed and clubbed into an object of their own, so they could stay together, \
    happily ever after, including happy developers.",
  "reasons": "The primary reason for this type of smell is poor software design \
    and program structure. Sometimes, co-operative data gets added to the system \
    as part of the feature, which works along with existing data to create data \
    clumps. Also, this could be a result of developers being lazy in a hasty \
    copy-pasty situation.",
  "refactorings": "If one identifies the repeating clumps of data as an object, \
    extract those data clusters into a class. In certain situations, the method \
    parameters go hand-in-hand with one another, which could be a sign of a \
    parameter object. It has seen that individual fields get passed from the \
    class to an object or method. Instead of doing that the object could \
    directly be passed in as a whole and preserve itself. The operations from \
    the object are thus accessible to the third-parties.",
  "references": "Extract Class (Fowler, 149), Preserve Whole Object (Fowler, 288), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Divergent Change",
  "category": "Change Preventers",
  "excerpt": "Situation that forces change in many unrelated class methods when \
    changes are made to a class.",
  "description": "This smell is commonly seen as a part of the process, where a \
    given class is changed in different ways for unrelated reasons. These small \
    changes to various methods of the same class cause divergent effect, which \
    means, making a slight change in one method require you to make many more \
    minor changes in other methods. This is sometimes referred to as an opposite \
    operation to the other code smell called Shotgun Surgery in which many small \
    changes are made in many different classes for similar vivid reasons.",
  "reasons": "Divergent change smells are mostly a result of poorly thought \
    through design this design issues, or architectural decisions for program \
    causes divergence effects. Things that compels developers to create smaller \
    adjustments into existing class might also be a reason to generate this \
    divergent change effects.",
  "refactorings": "To resolve the smell like divergent change one can think of \
    extracting a separate class. This class is mainly of all the functionalities \
    that could represent those smaller changes required into the existing methods. \
    If the class eventually needs potential change into several places, there might \
    be a possibility of extracting those characteristics into a separate object of \
    itself. In some instances where two or more classes show similar behavior, \
    there is a sense of extraction of a super-class with a set of common aspects \
    from those identified classes.",
  "references": "Extract Class (Fowler, 149)",
}, {
  "name": "Duplicate Code",
  "category": "Dispensables",
  "excerpt": "Almost identical pieces of code repeated in two or more places.",
  "description": "Duplicate code is one of the most commonly known smells in \
    software development. This smell spreads throughout the areas of software \
    code uncontrollably. Sometimes this it is very evident, but in other cases, \
    it might be very subtle. Some duplication might be straightforward as an \
    identically looking piece of code. Or it could be a little complex duplication \
    where it is a duplication of process or flow of the program. This kind of \
    repetitions might also be recognized as structural congruence. This application \
    code, in the long run, bloats the software in an unhealthy manner.",
  "reasons": "Duplication of code might occur when multiple people are working \
    on the project, and they are working on the different task making them \
    unaware of the changes made by their colleagues.  The solution created \
    by their peers might have the particular piece of code that will resemble \
    theirs. The code written by two or more people could be repurposed if it \
    was already in place. In certain parts of the system, the duplication is \
    not as gentle as we saw earlier. Two different processes might exhibit \
    different outcomes, but the flow or structure may be the same. In some \
    unfortunate situations, where deadlines are on the head of programmers, \
    these duplications might seem almost right for the task at hand. The code \
    masters then either become lazy or forgetful to clean the code post delivery.",
  "refactorings": "Duplications can be one of the interesting smells to resolve. \
    If two or more methods show similar code or two or more classes show identical \
    code, this code could be extracted as a separate method (might also be within \
    the same class) and this method could be called from places where this \
    duplication is removed. If the repetition is on the classes, we can pull the \
    common code up into the superclass. For areas where the duplicate code is \
    within the constructors the constructor code for same level classes could also \
    be pulled up in the same way as other class methods. In cases where creating \
    superclass is not possible one can try extracting class as a component of \
    different class and use it into the places where the duplication occurs. The \
    duplication that is caused within complex code structure is a little difficult \
    to find and resolve. The duplication caused by similar process could be solved \
    by using an optimal algorithm either from among the processes which are \
    duplicate or an entirely new process that could suitably replace all the \
    duplicate processes. In some situations, the duplication might also be within \
    expressions with only different conditions. There is a possibility of \
    extracting common aspects from these expressions into a consolidated \
    expression and extracted as a method eventually.",
  "references": "Extract Method (Fowler, 110), Substitue Algorithm (Fowler, 139), \
    Extract Class (Fowler, 149), Introduce Null Object (Fowler, 260), \
    Pull Up Field (Fowler, 320), Pull Up Method (Fowler, 322), \
    Form Template Method (Fowler, 345)",
}, {
  "name": "Feature Envy",
  "category": "Couplers",
  "excerpt": "Classes that tends to work on data from other classes than their own.",
  "description": "In object-oriented programming, the data and the behavior that \
    works on that data belongs together in one object. If there is a case where \
    too many calls to other classes are made by a method to obtain specific data \
    or to achieve some outcome becomes a case of being feature envious.",
  "reasons": "This type of smell occurs when the data is located into \
    independent class, as in a data class, or data is misplaced in another class \
    but belongs to a requesting class itself. When the field is moved from a class \
    to another, one should make sure relevant methods are also moved along with \
    that data.",
  "refactorings": "As a rule of thumb if two or more things change at the same \
    time they should stay at the same place, in our case same class, so the data \
    and the behavior which work on that data, change simultaneously. So, it makes \
    sense to keep them together. This is not always true, but right in most of the \
    cases. In cases where a particular method is accessing data from another \
    class, it might be a good practice to move that method to that specific class \
    containing the data. In places where the method only accesses a particular \
    piece of data, identifying that code and extracting it as a separate method \
    could help. Eventually, this extracted method could be moved to a suitable \
    place. If different methods from different classes access the data from one of \
    the classes then identifying that class and moving or extracting the methods \
    from other classes into this class helps to overcome this type of smell.",
  "references":
    "Extract Method (Fowler, 110), Move Method (Fowler, 142), Move Field (Fowler, 146)",
}, {
  "name": "Inappropriate Intimacy",
  "category": "Couplers",
  "excerpt": "Class uses private methods or data of another class.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references":
    "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Change Bidirectional Association to Unidirectional Association (Fowler, 200), \
    Extract Class (Fowler, 149), Hide Delegate (Fowler, 157), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Incomplete Library Client",
  "category": "Couplers",
  "excerpt": "Third-party library stops meeting project's upcoming needs.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Introduce Foreign Method (Fowler, 162), \
    Introduce Local Extension (Fowler, 164)",
}, {
  "name": "Large Class",
  "category": "Bloaters",
  "excerpt": "Class have 'too' many fields/methods/lines of code.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), Extract Subclass (Fowler, 330), Extract Interface (Fowler, 341)",
}, {
  "name": "Lazy Class",
  "category": "Dispensables",
  "excerpt": "Class that is maintained but does nothing.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Class (Fowler, 154), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Long Method",
  "category": "Bloaters",
  "excerpt": "Method containing too many lines of code.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Method (Fowler, 110), Replace Temp with Query (Fowler, 120), \
    Replace Method with Method Object (Fowler, 135), Decompose Conditional (Fowler, 238), \
    Preserve Whole Object (Fowler, 288), Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Long Parameter List",
  "category": "Bloaters",
  "excerpt": "Methods that take too many parameters as their arguments.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Preserve Whole Object (Fowler, 288), \
    Replace Parameter with Method (Fowler, 292), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Message Chains",
  "category": "Couplers",
  "excerpt": "Successive calls made from one method to another with multiple hops \
    in between to accomplish specific thing.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Method (Fowler, 110), Move Method (Fowler, 142), \
    Hide Delegate (Fowler, 157)",
}, {
  "name": "Middle Man",
  "category": "Couplers",
  "excerpt": "Class that exits for a sole purpose of delegating work to other class.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Method (Fowler, 117), Remove Middle Man (Fowler, 160), \
    Replace Delegation with Inheritance (Fowler, 355)",
}, {
  "name": "Parallel Inheritance Hierarchies",
  "category": "Change Preventers",
  "excerpt": "Changes made to one set of hierarchical classes needs its \
    replication into parallel classes.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146)",
}, {
  "name": "Primitive Obsession",
  "category": "Bloaters",
  "excerpt": "Obsessive use of primitive types instead of small classes for simple tasks.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), \
    Replace Array With Object (Fowler, 186), Replace Type Code with Class (Fowler, 218), \
    Replace Type Code with Subclasses (Fowler, 223), Replace Type Code with State/Strategy (Fowler, 227), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Refused Bequest",
  "category": "Tool Abusers",
  "excerpt": "Sub-classes use only some of the methods and data inheirted from parent \
    classes, keeping unneeded methods unused or redefined to throw undefined exceptions.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Push Down Field (Fowler, 329), Push Down Method (Fowler, 322), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Shotgun Surgery",
  "category": "Change Preventers",
  "excerpt": "Adding a change in specific part of the code requires many small \
    changes in many different classes.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Inline Class (Fowler, 154)",
}, {
  "name": "Speculative Generality",
  "category": "Dispensables",
  "excerpt": "Code that is written in anticipation of future requirements and \
    stays unused forever.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Inline Class (Fowler, 154), Rename Method (Fowler, 273), \
    Remove Parameter (Fowler, 277), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Switch Statements",
  "category": "Tool Abusers",
  "excerpt": "Complex set of conditionals to perform next step.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Replace Type Code with Subclasses (Fowler, 223), \
    Replace Type Code with State/Strategy (Fowler, 227), \
    Replace Conditional with Polymorphism (Fowler, 255), \
    Replace Parameter with Explicit Methods (Fowler, 285), \
    Introduce Null Object (Fowler, 260)",
}, {
  "name": "Temporary Field",
  "category": "Tool Abusers",
  "excerpt": "Temporary properties that get their values under very specific \
    circumstances, otherwise remains empty.",
  "description": "",
  "reasons": "",
  "refactorings": "",
  "references": "Extract Class (Fowler, 149), Introduce Null Object (Fowler, 260)",
}]

function countSmells() {
  $(".count-smells").text("Showing " + $(".card:visible").length + " of 22 code smells");
}

function resetFilterButtons() {
  $('.filters .btn.filter').each(function(index) {
    $(this).css("background", "#9e9e9e");
  });
  $(".clearfilters").hide();
  $(".filter-section").hide();
}

function search() {
  resetFilterButtons();
  $('.card').each(function() {
    $(this).parent().show();
  })
  var searchTerm = $('#search-box').val().toLowerCase()
  $('.card').each(function(index){
    if(this.innerHTML.toLowerCase().indexOf(searchTerm) > -1) {
      $(this).parent().show();
    } else {
      $(this).parent().hide();
    }
  });
}

function categorize(category) {
  if(category === 'Clear') {
    window.filter = '';
    $(".expansion-section").show();
    $(".filters-section").hide();
    resetFilterButtons();
  } else {
    window.filter = category;
    $(".filter-section").hide();
    $(".filter-section." + category.replace(/\s/g,'')).show();
    $(".card-header").each(function(index) {
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });

    $(".filters .btn.filter").each(function(index){
      if(this.innerHTML.indexOf(category) > -1) {
        $(this).css("background", "#3b5998");
      } else {
        $(this).css("background", "#9e9e9e");
      }
    });

    $(".clearfilters").css("display", "inline-block");
  }
  countSmells();
}

function expandDetailsSection(expansionSection) {
  $(expansionSection).removeClass("col-lg-4 col-md-6");
  $(expansionSection).find(".details").show();
  $(expansionSection).find(".close-expansion").show();
}

function compressDetailsSection(expansionSection) {
  $(expansionSection).addClass("col-lg-4 col-md-6");
  $(expansionSection).find(".details").hide();
  $(expansionSection).find(".expansion-button").show();
}

function reinstateBindings() {
  $(".expansion-section").on("click", ".expansion-button", function() {
    currentCardTitle = $(this).siblings(".card-title").text();
    $(".expansion-section").each(function(index) {
      if($(this).find(".card-title").text() !== currentCardTitle) {
        $(this).hide();
      }
    });
    hideOtherSections();
    expandDetailsSection($(this).closest(".expansion-section"));
    $(this).hide();
  });

  $(".expansion-section").on("click", ".close-expansion", function() {
    showOtherSections();
    compressDetailsSection($(this).closest(".expansion-section"));
    $(this).hide();
    if(window.filter !== undefined && window.filter !== "") {
      categorize(window.filter);
    }
  });
}

function hideOtherSections() {
  $(".filters").hide();
  $(".search").hide();
  $(".count-smells").hide();
}

function showOtherSections() {
  $(".expansion-section").show();
  $(".filters").show();
  $(".search").show();
  $(".count-smells").show();
}

function generateCodeSmells() {
  node = window.nodeTemplate.clone();
  node.removeClass("codesmell-section");
  var nodeBackup = node;
  codesmells.forEach(function(codesmell) {
    node = nodeBackup.clone();
    node.find('.card-header').append(codesmell['category']);
    node.find('.card-title').text(codesmell['name']);
    node.find('.excerpt-text').text(codesmell['excerpt']);
    node.find('.description-text').text(codesmell['description']);
    node.find('.reasons-text').text(codesmell['reasons']);
    node.find('.refactorings-text').text(codesmell['refactorings']);
    node.find('.references-text').text(codesmell['references']);
    $('.codesmells > .row').append(node);
  });
  reinstateBindings();
}

function generateFilters() {
  node = $(".filter-template").clone();
  node.removeClass("filter-template");
  var nodeBackup = node;
  filters.reverse().forEach(function(filter) {
    node = nodeBackup.clone();
    node.text(filter["name"]);
    node.attr("onclick", "categorize('"+ filter["name"] +"')");
    $(".filters").prepend(node);
  });
  $(".filter-template").hide();
}

function generateFilterInfo() {
  node = $(".filter-info").clone();
  node.removeClass("filter-info").addClass("filter-section").hide();
  var nodeBackup = node;
  filters.forEach(function(filter) {
    node = nodeBackup.clone();
    node.addClass(filter["name"].replace(/\s/g,''));
    node.find(".filter-header").text(filter["name"]);
    node.find(".filter-text").text(filter["description"]);
    $(".filters-description").append(node);
  });
  $(".filter-info").remove();
}

$(function() {
  window.nodeTemplate = $(".codesmell-section").clone();
  $(".codesmell-section").remove();
  generateCodeSmells();
  generateFilters();
  generateFilterInfo();
  countSmells();
});

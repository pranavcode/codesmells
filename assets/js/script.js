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
  "description": "This smell is evident when two or more classes become little \
    too intimate and spend too much time accessing each other's private fields and \
    behavior. As in real life, we follow specific space for humans same goes true \
    for classes as well. These over intimate classes needs to be redesigned, so \
    they do not interfere across private parts of other classes.",
  "reasons": "This smell occurs when two or more classes know more than what they \
    are supposed to know about each other. Little effort is taken to understand the \
    relationship between the two classes. One has to keep looking for classes that \
    spend too much time together good design suggests classes should know as little \
    as possible about each other making them easier to maintain and reuse.",
  "refactorings": "For such smells, one of the solutions refactoring is not very \
    straightforward. One solution would be to move the parts of the class that \
    interacts together more often to a suitable place. Moving the method or the \
    field that interacts with the other class directly into that particular class. \
    One has to be very careful about doing this kind of refactoring. Moving a \
    method or a field is a pragmatic decision based on the actual requirements \
    represented by given owner classes. Redesign of those classes can also be a \
    better way to approach this smell.",
  "references":
    "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Change Bidirectional Association to Unidirectional Association (Fowler, 200), \
    Extract Class (Fowler, 149), Hide Delegate (Fowler, 157), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Incomplete Library Class",
  "category": "Couplers",
  "excerpt": "Third-party library stops meeting project's upcoming needs.",
  "description": "Libraries are the primary mode of reusing well-written code. \
    Libraries tend to cover all our requirements as and when we decided to use them. \
    As our project progresses, there are situations where we have functionalities \
    that should have been part of the library, but we cannot move that functionality \
    into the library because the library is read-only and that forces us to start \
    writing our library classes or functions.",
  "reasons": "There are several reasons why this might occur. One of \
    the primary reasons being the author of the \
    library has not provided the feature as it was not widely required, also in some \
    cases, the author refused to implement those changes. Projects come to such \
    situations when they are highly reliant on the third-party libraries for their \
    primary functions. This dependence is not harmful, but it needs a good set of \
    encapsulation.",
  "refactorings": "A proper encapsulation of third-party classes \
    can help you introduce new methods within those classes that could work on \
    existing library methods to achieve the additional functionality. These \
    encapsulations can also help in replacing the library with a new \
    production-ready alternative. In some situations where any modifications are \
    required to the library class, one could try to implement a local extension for \
    that library class instead.",
  "references": "Introduce Foreign Method (Fowler, 162), \
    Introduce Local Extension (Fowler, 164)",
}, {
  "name": "Large Class",
  "category": "Bloaters",
  "excerpt": "Class have 'too' many fields/methods/lines of code.",
  "description": "Large class was literally coined for having too many lines of \
    codes/methods/fields. If a given class has too many instance variables or too \
    many methods, we can observe that the class is doing too much of work, which \
    could be further divided into lower level objects. Normally large classes are \
    observed to have too many responsibilities. Giving too many responsibilities \
    to a single class can create design flaws, introduce broken windows, add \
    adaptability issues and complexity to the system.",
  "reasons": "All classes normally start small, as they are created, during the \
    process of solving a given problem. But, as the time pass by, the code grows \
    and the classes get bloated. In typical cases, this can be observed when \
    programmers are lazy to create additional objects for the new feature and they \
    find it comforting to add this new feature in an existing class. This smell \
    could be considered similar to long methods.",
  "refactorings": "To resolve this smell one can think of an approach to \
    slimming the class by considering all the responsibilities that class is \
    currently holding. For each responsibility of that class one can investigate \
    if there is a possibility to extract that responsibility as a separate class \
    in itself, a separate component to the same class or a subclass. This \
    extraction can also be based on the overall behaviour where more than one \
    functionality can be clubbed together. Extracting the interfaces for the class \
    to allow the clients to use that class can also be a good approach.",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), Extract Subclass (Fowler, 330), Extract Interface (Fowler, 341)",
}, {
  "name": "Lazy Class",
  "category": "Dispensables",
  "excerpt": "Class that is maintained but does nothing.",
  "description": "Lazy classes are the classes that have no responsibility and \
    perform no supporting function to help the existing classes with something. \
    Understanding and maintaining classes will cost people, time and money for the \
    project. They are not doing enough work to be considered worthy of their \
    maintenance and should be eliminated.",
  "reasons": "There are a couple of reasons why this smell could occur. One \
    situation could be, where the class was designed to be fully-functional and \
    did a credible work within a system. However, after some of the refactoring it \
    has become ridiculously small and as a result, does not do any work. On the \
    other hand, the class might as well be added as part of anticipated features \
    which never got planned for, and the class remained as a blank class.",
  "refactorings": "One of the ways we can resolve this situation is by directly \
    removing the class because it has insignificant value in our codebase. If the \
    class has some usefulness, it could be added as an inline class to other \
    class. If the class is a subclass, it can be made to be merged inside the \
    superclass itself.",
  "references": "Inline Class (Fowler, 154), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Long Method",
  "category": "Bloaters",
  "excerpt": "Method containing too many lines of code.",
  "description": "A long method is a smell where methods are considered \
    disproportionately larger and responsible for multiple tasks. Some methods are \
    considered to be written with large code parts as a design and sometimes they \
    are considered acceptable to grow to that sizes eventually. It is principally \
    believed that using short methods is a superior approach, rather than using long \
    methods. Too long methods can contain a substantial duplicate code. If a long \
    method is divided into short methods, this duplication could be avoided, as the \
    logic will be shared among the short methods. Having short methods makes the \
    code to become more straightforward, easier to understand, less bloated as \
    compared to its longer counterpart. Short methods tend to be easier to extend \
    and maintain across the software lifecycle.",
  "reasons": "Long methods are the eventual results of continuous functionality \
    additions to the method identifying this smell at an early stage is not \
    possible. This smell is only identified aftermath. In justification of adding \
    a feature or functionality to an existing method, the method closes to a level \
    of being ugly and oversized. These methods are created by just adding one line \
    at a time, which is enough to realize this smell into reality.",
  "refactorings": "Instead of adding a new line into an existing method, it can \
    be thought of to be as a separate method. Having a good name for that method \
    will describe itself to greater detail, than adding a comment within a bigger \
    method. To tackle the length of a method one can think of extracting this \
    pieces of code within as a separate method. The approach of extracting smaller \
    methods could employee some techniques which can help to efficiently extract \
    it from this method, such as, creating a separate object to be passed as a \
    parameter. Some elements of the method like conditionals and loops are easily \
    extractable and movable to a separate method. Thinking about a method in \
    behavioral terms can tell us how that method should be divided into smaller \
    pieces and extracted into other methods or even in some cases whole objects.",
  "references": "Extract Method (Fowler, 110), Replace Temp with Query (Fowler, 120), \
    Replace Method with Method Object (Fowler, 135), Decompose Conditional (Fowler, 238), \
    Preserve Whole Object (Fowler, 288), Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Long Parameter List",
  "category": "Bloaters",
  "excerpt": "Methods that take too many parameters as their arguments.",
  "description": "Long parameter lists are considered smell when there are more \
    than four parameters passed to a method. In an ideal world, a method should \
    never receive more than 3 to 4 parameters. Methods which accept more than \
    these many numbers of parameters are typically designed as procedural methods. \
    In an object-oriented sense, one should try to understand the need for these \
    many parameters and try to use the least number of them. Thinking regarding \
    objects make the list of parameters go down. Moreover, in some cases, it is \
    okay to allow the method to track down the required data to perform the \
    defined operations.",
  "reasons": "Long parameters can be a result of too many things processed \
    within a method. In some cases, the methods perform multiple functions or \
    algorithms, and this parameter list helps control those aspects. Sometimes, \
    the longer parent list can also be due to unidentified objects. Orchestrating \
    method which deals with multiple objects need those objects to be passed in as \
    parameters, and thus parameter list grows. As the list grows, it becomes more \
    difficult to maintain and understand them. Their usage becomes painful too.",
  "refactorings": "Before understanding why the long parameter list is present \
    in the first place, one has to understand what responsibilities the method, \
    accepting this long parameter list, is holding. Reconsidering the \
    responsibilities of this method might help resolve the issue of having a large \
    parameter list. Instead of using long parameter list, one can think of \
    creating objects out of those parameters, which resemble in there \
    characteristics. Converting the parameters required by the method as a \
    first-class citizen into data fields and directly using them within the method \
    is a better approach. If the current object does not contain all the necessary \
    data, pass another object as a method parameter, and that object could hold \
    the responsibility to fetch the required data. Also, one can merge separate \
    data elements into a single parameter object.",
  "references": "Preserve Whole Object (Fowler, 288), \
    Replace Parameter with Method (Fowler, 292), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Message Chains",
  "category": "Couplers",
  "excerpt": "Successive calls made from one method to another with multiple hops \
    in between to accomplish specific thing.",
  "description": "Message chains can transfer a sequence of method calls that  \
    happen as the process flows from one point to another. This sequence of \
    messages or continuous temporary variables strive to create a single result, \
    but with many handshakes in between. This kind of message chains indeed \
    surfaces the dependency between two or more parts of the system. This chains \
    can create potentially unrelated relationships between many objects.",
  "reasons": "The reason for such messages is mostly because of a client call \
    that requests an object which in return requests another object, and so on. \
    The request from the client cannot be satisfied by one object so that object \
    needs to ask for the result from another object. That's when this chain \
    occurs. The problem of having to access chain of messages could also be the \
    reason for the client being dependent on navigating class structures. \
    Modification to this relationship between these interrelated objects may also \
    result in the modification of any client, accessing this object chain. Which \
    could be the result of having multiple developers creating their modules or \
    abstractions to handle a particular feature instead of collating them into a \
    single entity. This single entity introduced by us as a code that exhibits the \
    work that is required by the client immediately, instead of passing around of \
    the calls across the whole codebase.",
  "refactorings": "We could refactor this message chain by hiding delegation. \
    Understanding the reason for the use of the last object in the chain could \
    make the structure better. The object could be extracted, or the message could \
    also be extracted to a location where the client can access it immediately. In \
    some other cases, the methods could also be moved into early access \
    locations.",
  "references": "Extract Method (Fowler, 110), Move Method (Fowler, 142), \
    Hide Delegate (Fowler, 157)",
}, {
  "name": "Middle Man",
  "category": "Couplers",
  "excerpt": "Class that exits for a sole purpose of delegating work to other class.",
  "description": "Delegation is a fundamental feature of objects in \
    object-oriented programming. Delegations are great, but too much delegation \
    could lead to objects having no intrinsic values. Their existence would be \
    just for the sake of passing over messages from one location to the other. \
    This concept is similar to the real-life middlemen, who pass over the work \
    from one critical point to the other and merely become messengers between the \
    two. There is a primary question that, is there an actual need for this kind \
    of an object to exist, if there work is only to perform delegations.",
  "reasons": "Middleman occurs due to various factors like refactoring while \
    shortening the size of bigger classes into smaller ones. Relieving too much \
    work from classes could also add mediators. Sometimes messages are refactored \
    into middleman too. In some situations, the middleman is the result of gradual \
    changes to a class where all vital elements of that class are moved to other \
    classes, and the class remains empty with only delegations to other classes.",
  "refactorings": "The resolution for intermediaries is the removal of these \
    middle methods. Clients could be requested to call the end method which is \
    required by them directly. The methods could be extracted into classes where \
    they have the appropriate location for their existence.",
  "references": "Inline Method (Fowler, 117), Remove Middle Man (Fowler, 160), \
    Replace Delegation with Inheritance (Fowler, 355)",
}, {
  "name": "Parallel Inheritance Hierarchies",
  "category": "Change Preventers",
  "excerpt": "Changes made to one set of hierarchical classes needs its \
    replication into parallel classes.",
  "description": "The case is sometimes referred to when there is a need to make \
    changes into parallel subclasses. When a subclass is added to a similar class \
    subclass needs to be added to another base class to complete the parallel \
    structure. The inheritance becomes the structural requirement which needs to \
    be satisfied on both the parallel sides. Failure to do so might create \
    unexpected results and inconsistent logic.",
  "reasons": "The reason for these changes might be related to ever-growing \
    requirements on the project and ever-increasing hierarchical structure. As the \
    hierarchy of two parents grows, it becomes difficult to migrate from that \
    structure to a simpler structure. So, it becomes necessary to add those \
    subclasses and make those changes into the parallel hierarchies.",
  "refactorings": "Deduplication for this kind of smells is the first solution. \
    Essentially deduplication of parallel hierarchies. This deduplication could be \
    achieved in two steps. The first step is to realize and denote one of the \
    hierarchies more significant in the codebase, where the instances are referred \
    to by that significant hierarchy. The other parallel hierarchy which is \
    causing this smell is then removed by moving the method and the related fields \
    into the new identified significant hierarchy.",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146)",
}, {
  "name": "Primitive Obsession",
  "category": "Bloaters",
  "excerpt": "Obsessive use of primitive types instead of small classes for simple tasks.",
  "description": "Primitives are primary data types. They include the likes of \
    integers, strings, doubles, floats, another low-level language elements. They \
    are pretty generic because they could be used in various ways. Whereas, \
    composite data types like classes, structures, are very explicitly used by \
    someone who needs them as per their requirement. Composite types are created \
    on purpose. Modeling a solution for a given problem could be achieved in a \
    better way in the form of composite types as compared to solving it in \
    primitive types. Classes represent code and its relationship with the other \
    code in the much better way. This concept could be better understood and told \
    in the form of classes as compared to their primitive counterparts. Using \
    higher-level abstractions typically creates clear and simplified code as \
    compared to primitives.",
  "reasons": "Primitives are primarily added due to unreasonable situations. It \
    is argued by programmers that, creating the field of the primitive type in a \
    class is much more comfortable than making a separate abstraction. Abstraction \
    needs a complete thought process behind its existence, and thus programmers \
    tend to simplify their own life by creating primitives. These primitives creep \
    up into the code in the form of fields, variable or constants, as and when \
    needed. Sometimes, these primitives are observed to be as a  simulation of \
    abstraction types. This is a weak form of code, which is given a pretty name, \
    so does not get caught. Easy to understand the form of these primitives then \
    spread across the whole codebase.",
  "refactorings": "The broad set of primitive fields could be possibly a logical \
    group, which could be extracted as a separate class of its own. This extracted \
    field could also carry their behavior with them into that class. If these \
    primitives are used as a parameter into a function, those could be extracted \
    as well, as a parameter objects and passed in as a whole object. The \
    primitives can also be thought with their behavior and extracted as core \
    classes or subclasses and associated with the state of the system instead of \
    being into a particular class.",
  "references": "Extract Class (Fowler, 149), Replace Data Value with Object (Fowler, 175), \
    Replace Array With Object (Fowler, 186), Replace Type Code with Class (Fowler, 218), \
    Replace Type Code with Subclasses (Fowler, 223), Replace Type Code with State/Strategy (Fowler, 227), \
    Introduce Parameter Object (Fowler, 295)",
}, {
  "name": "Refused Bequest",
  "category": "Tool Abusers",
  "excerpt": "Sub-classes use only some of the methods and data inheirted from parent \
    classes, keeping unneeded methods unused or redefined to throw undefined exceptions.",
  "description": "Refused “bequest” is a form of smell where the inheritance is \
    compelling the subclasses to implement things that they don't want to. This is \
    to say that, the inheritance causes the unexpected code to be inherited. \
    Instead of honoring the inheritance, the code is written to refuse this \
    request. The subclass says “I am not responsible for implementing this \
    particular method,” which is when this kind of smell occurs.",
  "reasons": "Refused bequest occur as a result of unclear inheritance. The \
    inheritance between the classes which are not related to each other and are in \
    completely different domains. This kind of inheritance might be a result of a \
    desire to use some code from the superclass, merely because it exists and has \
    some resemblance. The functionality inherited from the superclass, may not be \
    directly applicable to the subclass. Thus the subclass refuses to implement \
    the behavior and sometimes throws exceptions.",
  "refactorings": "This kind of inheritance is genuinely unhealthy for the \
    codebase and should be eliminated, when possible. One could replace this \
    inheritance using delegation. Subclass which has nearly no commonalities with \
    the superclass makes no sense to be in the hierarchy. In situations where \
    inheritance is appropriate, remove the unused methods and fields from the \
    subclass. The fields and methods which are needed by the subclasses from the \
    parent classes could be extracted into an even higher superclass, which could \
    be inherited by these superclasses and then by the subclasses. Making it an \
    explicit inheritance, which is better in form and structure, and give value to \
    the codebase overall.",
  "references": "Push Down Field (Fowler, 329), Push Down Method (Fowler, 322), \
    Replace Inheritance with Delegation (Fowler, 352)",
}, {
  "name": "Shotgun Surgery",
  "category": "Change Preventers",
  "excerpt": "Adding a change in specific part of the code requires many small \
    changes in many different classes.",
  "description": "Shotgun surgery is a form of code change as a compulsion into \
    various places in the codebase for a small change required in a specific part. \
    The new behavior which is required to be added forces the programmers to make \
    a lot of small changes in different places. This could be considered as an \
    opposite smell for divergent change smell, where change requires to make many \
    changes in the same class.",
  "reasons": "When a feature or behavior is needed to be introduced in the \
    system, and a single responsibility is split among a large number of classes, \
    many small changes are required, to make sure this feature changes could be \
    introduced in the system, which is doing a shotgun surgery. Sometimes to \
    minimize the responsibility of a given class many classes are introduced in \
    the system to act as a part of the same responsibility.",
  "refactorings": "Shotgun surgery could be resolved by moving the required \
    methods or fields into a single class that could hold them appropriately. If \
    no existing class can hold this particular responsibility, a new class should \
    be created. We want to arrive at an ideal situation, where minimal changes \
    could be made to the system’s different places if a feature is required to be \
    added. Making small changes required by many different parts of the system \
    tends to introduce more wrong and broken code. Sometimes, moving the fields \
    and methods into other class or a single class could lead to having classes in \
    the system which are almost empty, those classes could be either eliminated or \
    inlined into the existing classes.",
  "references": "Move Method (Fowler, 142), Move Field (Fowler, 146), \
    Inline Class (Fowler, 154)",
}, {
  "name": "Speculative Generality",
  "category": "Dispensables",
  "excerpt": "Code that is written in anticipation of future requirements and \
    stays unused forever.",
  "description": "Speculative generality is a smell that occurs due to \
    futuristic fields or abstractions present in the code. This anticipated code \
    is the result of future proofing. The code has no significance in the system \
    today and may not have any significance in future as well. There is a \
    possibility of some future behavior as anticipated by the programmer, which \
    may or may not necessarily come true due to various reasons.",
  "reasons": "In some cases, the code is created in anticipation of future \
    requirement and to support any future behavior changes. This change becomes \
    unreasonable as there is no guarantee that the future features will ever be \
    implemented. These code pieces then become unnecessarily hard to understand \
    and maintain.",
  "refactorings": "Solutions to speculative generality are almost always related \
    to removal of the futuristic code. In some situations, the abstract classes \
    could be removed by collapsing the hierarchy. The abstractions which are not \
    required at the moment could be eliminated by inlining the classes. The \
    methods which are not used can also be eliminated. The parameters which are \
    part of the function calls could be removed, as they are safely written to \
    support the current behavior. Deletion of unused fields is equally \
    straightforward.",
  "references": "Inline Class (Fowler, 154), Rename Method (Fowler, 273), \
    Remove Parameter (Fowler, 277), Collapse Hierarchy (Fowler, 344)",
}, {
  "name": "Switch Statements",
  "category": "Tool Abusers",
  "excerpt": "Complex set of conditionals to perform next step.",
  "description": "Switch statements smell is primarily related to having a \
    complex set of conditionals across the system. This smell also denotes the \
    duplication of similar conditions across different sections of the codebase. \
    This is the reaction of procedural thinking instead of object-orientation and \
    missed opportunity of beautiful concepts of object-oriented programming like \
    polymorphism.",
  "reasons": "Using switch statements is not a good sign within the \
    object-oriented code. Even though sometimes it is necessary to use them, but \
    they are rarely used. To properly utilize the object orientation smaller \
    switch cases are scattered across different places in the codebase and \
    sometimes these conditional codes are also in the form of if statements. If \
    the same conditional statements are duplicated across the system, when we \
    change one such switch statement others needs to be changed as well, to \
    maintain the consistency.",
  "refactorings": "The primary resolution for such kind of smells is to use \
    polymorphism. Isolating the switch statements into their appropriate classes \
    and extracting those into specific methods and moving those methods into \
    proper classes is an excellent way to resolve this duplication and complexity \
    due to conditions. Sometimes, these switch statements require the type based \
    code, where a specific type of object is conditioned against. In such \
    situations, subclasses could be used as a strategy. Replacing the condition \
    with polymorphism is the best option in this situation. When the switch is not \
    avoidable, then one can think of replacing the results from switch conditions \
    into smaller methods, so it becomes little more straightforward to understand \
    and extend.",
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
  "description": "Some object contains fields that are not used all the time. \
    They are used at a specific circumstance; otherwise, they remain empty. In \
    some instances, these fields, which are not used, may also contain an \
    irrelevant data which is difficult to comprehend. These shortlived fields are \
    either in the form of state or flag fields.",
  "reasons": "In most of the situations, an algorithm, which is employed by the \
    solution, requires some amount of data to exist as part of the input. Instead \
    of acquiring the information or passing it as a parameter, the programmer \
    creates fields of the data in that class itself. The algorithm only needs the \
    temporary field for specific conditions; otherwise they are unused. If one \
    takes a field in an object, to check for their existence and if they have some \
    specific value, when you take them they are almost always empty for some \
    reason. Moreover, this makes the code difficult to understand. The \
    significance of these temporaries is very context dependent and not widely \
    known, which could be harmful to the future development of the system.",
  "refactorings": "Temporary fields are resolved by extracting them into a \
    separate class of their own. This class can use these fields to their full \
    extent. Whenever this abstracted class is performing some operation, these \
    fields are used. Making an object for those fields will make sure the \
    shortlived fields are fully utilized. This class then can be used by the other \
    classes, which requires those short fields. The temporary field values could \
    then be verified using null objects as a conditional code if required.",
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
  countSmells();
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

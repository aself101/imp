<?php
  /********************************************************
  Alexander Self
  index.php: All serverside actions; each corresponds to a redux action
  and should map similarly
  ********************************************************/

  if (is_ajax()) {
    $config = parse_ini_file('config.ini');
    $dbname = $config['dbname'];


    try {
      $db = new PDO("mysql:host=127.0.0.1;dbname=$dbname;charset=utf8",$config['username'],$config['password']);
    } catch(PDOException $ex) {
      echo json_encode("No db connection");
    }
    if (isset($_GET['createInfoType'])) {
      createInfoType($db);
    } elseif (isset($_GET['fetchInfoTypes'])) {
      fetchInfoTypes($db);
    } elseif (isset($_GET['fetchEditInfotype'])) {
      fetchEditInfotype($db);
    } elseif (isset($_GET['editInfoType'])) {
      editInfoType($db);
    } elseif (isset($_GET['deleteInfoType'])) {
      deleteInfoType($db);
    } elseif (isset($_GET['fetchTools'])) {
      fetchTools($db);
    } elseif (isset($_GET['createTool'])) {
      createTool($db);
    } elseif (isset($_GET['fetchEditTool'])) {
      fetchEditTool($db);
    } elseif (isset($_GET['editTool'])) {
      editTool($db);
    } elseif (isset($_GET['deleteTool'])) {
      deleteTool($db);
    } elseif (isset($_GET['fetchInfotypeVersions'])) {
      fetchInfotypeVersions($db);
    } elseif (isset($_GET['fetchToolVersions'])) {
      fetchToolVersions($db);
    }

  }

  function is_ajax() {
    return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
  }

  function createInfoType($db) {
    $access = $_GET['data']['access'];
    $accessDescription = $_GET['data']['accessDescription'];
    $audits = $_GET['data']['audits'];
    $auditDescription = $_GET['data']['auditDescription'];
    $changeControl = $_GET['data']['changeControl'];
    $changeDescription = $_GET['data']['changeDescription'];
    $description = $_GET['data']['description'];
    $guid = $_GET['data']['guid'];
    $link = $_GET['data']['link'];
    $location = $_GET['data']['location'];
    $locationInfo = $_GET['data']['locationInfo'];
    $name = $_GET['data']['name'];
    $timestamp = $_GET['data']['_timestamp'];
    $uniqueDescription = $_GET['data']['uniqueDescription'];
    $uniqueID = $_GET['data']['uniqueID'];
    $createDescription = $_GET['data']['createDescription'];

    $stmt = $db->prepare("INSERT INTO infoTypes (guid, _timestamp, name, description, location, link, createDescription, access,
      accessDescription, changeControl, changeDescription, uniqueID, uniqueidDescription, audits, auditDescription, locationInfo)
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute(array($guid, $timestamp, $name, $description, $location, $link, $createDescription, $access, $accessDescription,
      $changeControl, $changeDescription, $uniqueID, $uniqueDescription, $audits, $auditDescription, $locationInfo));

    echo json_encode(fetchAllInfoTypes($db));
  }

  function fetchInfoTypes($db) {
    echo json_encode(fetchAllInfoTypes($db));
  }

  function fetchAllInfoTypes($db) {
    $stmt = $db->prepare("SELECT * FROM infoTypes ORDER BY name");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
  }

  /* Fetches an infotype to be edited */
  function fetchEditInfotype($db) {
    $guid = $_GET['data'];

    $stmt = $db->prepare("SELECT * FROM infoTypes WHERE guid='$guid'");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($row);
  }

  function editInfoType($db) {
    $guid = $_GET['data']['guid'];
    $access = $_GET['data']['access'];
    $accessDescription = $_GET['data']['accessDescription'];
    $audits = $_GET['data']['audits'];
    $auditDescription = $_GET['data']['auditDescription'];
    $changeControl = $_GET['data']['changeControl'];
    $changeDescription = $_GET['data']['changeDescription'];
    $description = $_GET['data']['description'];
    $link = $_GET['data']['link'];
    $location = $_GET['data']['location'];
    $locationInfo = $_GET['data']['locationInfo'];
    $name = $_GET['data']['name'];
    $uniqueDescription = $_GET['data']['uniqueDescription'];
    $uniqueID = $_GET['data']['uniqueID'];
    $createDescription = $_GET['data']['createDescription'];
    $timestamp = $_GET['data']['_timestamp'];
    $versionID = $_GET['data']['versionID'];

    /****************** Versioning ****************/
    $oldVersion = pullCurrentInfoVersion($db, $guid);
    createOldInfoVersion($db, $oldVersion, $versionID);
    /**********************************************/

    $stmt = $db->prepare("UPDATE infoTypes SET name=?, description=?, location=?, link=?, createDescription=?, access=?,
      accessDescription=?, changeControl=?, changeDescription=?, uniqueID=?, uniqueidDescription=?, audits=?, auditDescription=?,
      _timestamp=?, locationInfo=? WHERE guid='$guid'");
    $stmt->execute(array($name, $description, $location, $link, $createDescription, $access, $accessDescription,
      $changeControl, $changeDescription, $uniqueID, $uniqueDescription, $audits, $auditDescription, $timestamp, $locationInfo));

    echo json_encode(fetchAllInfoTypes($db));
  }

  function deleteInfoType($db) {
    $guid = $_GET['data'];

    // Delete from primary table
    $stmt = $db->prepare("DELETE FROM infoTypes WHERE guid='$guid'");
    $stmt->execute();
    // Delete all associated versions
    $stmt = $db->prepare("DELETE FROM versioningInfoTypes WHERE guid='$guid'");
    $stmt->execute();

    echo json_encode(fetchAllInfoTypes($db));
  }

  /*********************************************************************
    TOOLS
  **********************************************************************/
  function fetchAllTools($db) {
    $stmt = $db->prepare("SELECT * FROM tools ORDER BY name");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $rows;
  }

  function fetchTools($db) {
    echo json_encode(fetchAllTools($db));
  }

  function createTool($db) {
    $guid = $_GET['data']['guid'];
    $timestamp = $_GET['data']['_timestamp'];
    $name = $_GET['data']['name'];
    $manager = $_GET['data']['manager'];
    $contentManager = $_GET['data']['contentManager'];
    $description = $_GET['data']['description'];
    $existingPolicy = $_GET['data']['existingPolicy'];
    $existingProcesses = $_GET['data']['existingProcesses'];
    $existingTutorials = $_GET['data']['existingTutorials'];
    $location = $_GET['data']['location'];

    $stmt = $db->prepare("INSERT INTO tools (guid, _timestamp, name, manager, contentManager, description,
      existingPolicy, existingProcesses, existingTutorials, location) VALUES(?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute(array($guid, $timestamp, $name, $manager, $contentManager, $description, $existingPolicy,
      $existingProcesses, $existingTutorials, $location));

    echo json_encode(fetchAllTools($db));
  }

  function fetchEditTool($db) {
    $guid = $_GET['data'];

    $stmt = $db->prepare("SELECT * FROM tools WHERE guid='$guid'");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode($row);
  }
  /* Edits a tool */
  function editTool($db) {
    $guid = $_GET['data']['guid'];
    $name = $_GET['data']['name'];
    $manager = $_GET['data']['manager'];
    $contentManager = $_GET['data']['contentManager'];
    $description = $_GET['data']['description'];
    $existingPolicy = $_GET['data']['existingPolicy'];
    $existingProcesses = $_GET['data']['existingProcesses'];
    $existingTutorials = $_GET['data']['existingTutorials'];
    $location = $_GET['data']['location'];
    $versionID = $_GET['data']['versionID'];
    $timestamp = $_GET['data']['_timestamp'];

    /****************** Versioning ****************/
    $version = pullCurrentToolVersion($db, $guid);
    createOldToolVersion($db, $version, $versionID);
    /**********************************************/

    $stmt = $db->prepare("UPDATE tools SET name=?, manager=?, contentManager=?, description=?,
      existingPolicy=?, existingProcesses=?, existingTutorials=?, location=?, _timestamp=? WHERE guid='$guid'");
    $stmt->execute(array($name, $manager, $contentManager, $description, $existingPolicy, $existingProcesses,
      $existingTutorials, $location, $timestamp));

    echo json_encode(fetchAllTools($db));
  }
  /* Deletes a tool */
  function deleteTool($db) {
    $guid = $_GET['data'];

    $stmt = $db->prepare("DELETE FROM tools WHERE guid='$guid'");
    $stmt->execute();

    $stmt = $db->prepare("DELETE FROM versioningTools WHERE guid='$guid'");
    $stmt->execute();

    echo json_encode(fetchAllTools($db));
  }
  /* Fetches all versions of a given infotype */
  function fetchInfotypeVersions($db) {
    $guid = $_GET['data'];
    $stmt = $db->prepare("SELECT * FROM versioningInfoTypes WHERE guid='$guid'");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($rows);
  }

  function fetchToolVersions($db) {
    $guid = $_GET['data'];

    $stmt = $db->prepare("SELECT * FROM versioningTools WHERE guid='$guid'");
    $stmt->execute();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($rows);
  }

  /****************************** Helpers ***************************/
  /* Pulls the current version of the information type */
  function pullCurrentInfoVersion($db, $guid) {
    $stmt = $db->prepare("SELECT guid, name, description, location, link, createDescription,
      access, accessDescription, changeControl, changeDescription, uniqueID, uniqueidDescription,
      audits, auditDescription, _timestamp, locationInfo FROM infoTypes WHERE guid='$guid'");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    return $row;
  }
  /* Saves the old version of the information type */
  function createOldInfoVersion($db, $version, $versionID) {
    $guid = $version['guid'];
    $name = $version['name'];
    $description = $version['description'];
    $location = $version['location'];
    $link = $version['link'];
    $createDescription = $version['createDescription'];
    $access = $version['access'];
    $accessDescription = $version['accessDescription'];
    $changeControl = $version['changeControl'];
    $changeDescription = $version['changeDescription'];
    $uniqueID = $version['uniqueID'];
    $uniqueidDescription = $version['uniqueidDescription'];
    $audits = $version['audits'];
    $auditDescription = $version['auditDescription'];
    $locationInfo = $version['locationInfo'];
    $timestamp = $version['_timestamp'];

    $stmt = $db->prepare("INSERT INTO versioningInfoTypes (guid, name, description, location, link, createDescription, access,
      accessDescription, changeControl, changeDescription, uniqueID, uniqueidDescription, audits, auditDescription, _timestamp,
      locationInfo, versionID)
      VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute(array($guid, $name, $description, $location, $link, $createDescription, $access, $accessDescription,
      $changeControl, $changeDescription, $uniqueID, $uniqueidDescription, $audits, $auditDescription, $timestamp,
      $locationInfo, $versionID));
  }

  /* Saves the old version of the tool */
  function createOldToolVersion($db, $version, $versionID) {
    $guid = $version['guid'];
    $name = $version['name'];
    $description = $version['description'];
    $manager = $version['manager'];
    $contentManager = $version['contentManager'];
    $existingTutorials = $version['existingTutorials'];
    $existingProcesses = $version['existingProcesses'];
    $existingPolicy = $version['existingPolicy'];
    $location = $version['location'];
    $timestamp = $version['_timestamp'];

    $stmt = $db->prepare("INSERT INTO versioningTools (guid, name, description, manager, contentManager, existingTutorials,
      existingProcesses, existingPolicy, location, _timestamp, versionID) VALUES(?,?,?,?,?,?,?,?,?,?,?)");
    $stmt->execute(array($guid, $name, $description, $manager, $contentManager, $existingTutorials, $existingProcesses,
      $existingPolicy, $location, $timestamp, $versionID));
  }
  /* Pulls the current version of the tool */
  function pullCurrentToolVersion($db, $guid) {
    $stmt = $db->prepare("SELECT * FROM tools WHERE guid='$guid'");
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    return $row;
  }
  /******************************************************************/


/* END */
?>

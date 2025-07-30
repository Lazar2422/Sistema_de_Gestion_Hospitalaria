db.createCollection("PACIENTES", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "DNI",
        "Nombre",
        "Telefono",
        "Direccion",
        "CorreoElectronico",
        "id_seguro",
        "id_hospital",
        "NumeroHistoria",
        "GrupoEdad"
      ],
      "properties": {
        "DNI": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Telefono": {
          "bsonType": "string"
        },
        "Direccion": {
          "bsonType": "string"
        },
        "CorreoElectronico": {
          "bsonType": "string"
        },
        "id_seguro": {
          "bsonType": "string"
        },
        "id_hospital": {
          "bsonType": "string"
        },
        "NumeroHistoria": {
          "bsonType": "string"
        },
        "GrupoEdad": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("HISTORIA_CLINICA", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_historia_clinica",
        "id_paciente"
      ],
      "properties": {
        "id_historia_clinica": {
          "bsonType": "string"
        },
        "id_paciente": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("DETALLE_HISTORIA", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_detalle",
        "id_historia_clinica",
        "id_visita",
        "Control",
        "Fecha",
        "Condicion",
        "Procedimiento"
      ],
      "properties": {
        "id_detalle": {
          "bsonType": "string"
        },
        "id_historia_clinica": {
          "bsonType": "string"
        },
        "id_visita": {
          "bsonType": "string"
        },
        "Control": {
          "bsonType": "string"
        },
        "Fecha": {
          "bsonType": ["date","string"]
        },
        "Condicion": {
          "bsonType": "string"
        },
        "Procedimiento": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("MEDICOS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "NumColegiatura",
        "Nombre",
        "Telefono",
        "id_especialidad",
        "CorreoElectronico",
        "Salario",
        "id_hospital"
      ],
      "properties": {
        "NumColegiatura": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Telefono": {
          "bsonType": "string"
        },
        "id_especialidad": {
          "bsonType": "string"
        },
        "CorreoElectronico": {
          "bsonType": "string"
        },
        "Salario": {
          "bsonType": ["double", "int"],
          "minimum":0
        },
        "id_hospital": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("ESPECIALIDADES", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_especialidad",
        "Nombre"
      ],
      "properties": {
        "id_especialidad": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("VISITAS_MEDICAS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_visita",
        "Fecha",
        "Hora",
        "Direccion",
        "id_medico",
        "id_paciente",
        "id_hospital"
      ],
      "properties": {
        "id_visita": {
          "bsonType": "string"
        },
        "Fecha": {
          "bsonType": ["date","string"]
        },
        "Hora": {
          "bsonType": "string"
        },
        "Direccion": {
          "bsonType": "string"
        },
        "id_medico": {
          "bsonType": "string"
        },
        "id_paciente": {
          "bsonType": "string"
        },
        "id_hospital": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("HOSPITALES", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_hospital",
        "Nombre",
        "Direccion",
        "id_director",
        "id_especialidad",
        "Sede"
      ],
      "properties": {
        "id_hospital": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Direccion": {
          "bsonType": "string"
        },
        "id_director": {
          "bsonType": "string"
        },
        "id_especialidad": {
          "bsonType": "string"
        },
        "Sede": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("DIRECTORES", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_director",
        "Nombre",
        "Profesion"
      ],
      "properties": {
        "id_director": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Profesion": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("SEGUROS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_seguro",
        "Nombre",
        "id_cobertura"
      ],
      "properties": {
        "id_seguro": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "id_cobertura": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("COBERTURAS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_cobertura",
        "Tipo",
        "Descripcion"
      ],
      "properties": {
        "id_cobertura": {
          "bsonType": "string"
        },
        "Tipo": {
          "bsonType": "string"
        },
        "Descripcion": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("TRATAMIENTOS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_tratamiento",
        "Tipo",
        "Duracion",
        "Valor",
        "id_medico",
        "id_paciente"
      ],
      "properties": {
        "id_tratamiento": {
          "bsonType": "string"
        },
        "Tipo": {
          "bsonType": "string"
        },
        "Duracion": {
          "bsonType": "string"
        },
        "Valor": {
          "bsonType": ["double", "int"],
          "minimum":0
        },
        "id_medico": {
          "bsonType": "string"
        },
        "id_paciente": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("MEDICAMENTOS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_medicamento",
        "Nombre",
        "id_tipo_medicamento",
        "Fabricante",
        "Lote",
        "Disponible"
      ],
      "properties": {
        "id_medicamento": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "id_tipo_medicamento": {
          "bsonType": "string"
        },
        "Fabricante": {
          "bsonType": "string"
        },
        "Lote": {
          "bsonType": "string"
        },
        "Disponible": {
          "bsonType": "bool"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("TIPO_MEDICAMENTO", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_tipo_medicamento",
        "Nombre"
      ],
      "properties": {
        "id_tipo_medicamento": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("INVENTARIO", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_inventario",
        "id_medicamento",
        "Cantidad"
      ],
      "properties": {
        "id_inventario": {
          "bsonType": "string"
        },
        "id_medicamento": {
          "bsonType": "string"
        },
        "Cantidad": {
          "bsonType": "int"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("PROVEEDORES", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_proveedor",
        "Nombre"
      ],
      "properties": {
        "id_proveedor": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("PROVEEDOR_PRODUCTO", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_proveedor",
        "id_medicamento",
        "Lote"
      ],
      "properties": {
        "id_proveedor": {
          "bsonType": "string"
        },
        "id_medicamento": {
          "bsonType": "string"
        },
        "Lote": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("AREAS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_area",
        "Nombre",
        "Tipo"
      ],
      "properties": {
        "id_area": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Tipo": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("ENFERMERAS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_enfermera",
        "id_area",
        "Salario",
        "id_hospital"
      ],
      "properties": {
        "id_enfermera": {
          "bsonType": "string"
        },
        "id_area": {
          "bsonType": "string"
        },
        "Salario": {
          "bsonType": ["double", "int"],
          "minimum":0
        },
        "id_hospital": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("PERSONAL_MANTENIMIENTO", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_personal",
        "id_hospital",
        "Gestion",
        "Salario"
      ],
      "properties": {
        "id_personal": {
          "bsonType": "string"
        },
        "id_hospital": {
          "bsonType": "string"
        },
        "Gestion": {
          "bsonType": "string"
        },
        "Salario": {
          "bsonType": ["double", "int"],
          "minimum":0
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("PERSONAL_ADMINISTRATIVO", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_personal",
        "id_hospital",
        "Nombre",
        "Salario"
      ],
      "properties": {
        "id_personal": {
          "bsonType": "string"
        },
        "id_hospital": {
          "bsonType": "string"
        },
        "Nombre": {
          "bsonType": "string"
        },
        "Salario": {
          "bsonType": ["double", "int"],
          "minimum":0
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
  
  db.createCollection("CUENTAS", {
    validator: {
    "$jsonSchema": {
      "bsonType": "object",
      "required": [
        "id_cuenta",
        "id_paciente",
        "Fecha",
        "Valor",
        "Facturacion"
      ],
      "properties": {
        "id_cuenta": {
          "bsonType": "string"
        },
        "id_paciente": {
          "bsonType": "string"
        },
        "Fecha": {
          "bsonType": ["date","string"]
        },
        "Valor": {
          "bsonType": ["double", "int"],
          "minimum":0
        },
        "Facturacion": {
          "bsonType": "string"
        }
      }
    }
  },
    validationLevel: "strict",
    validationAction: "error"
  });
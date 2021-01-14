class ValidINput {

  constructor(store, value) {

    this.store = store;
    this.value = value;

  };

  validInput( setText, setValue ) {

    this.store.dispatch(setText(this.value));
    this.store.dispatch(setValue(true));

  };

  unvalidInput(setText, setValue) {

    this.store.dispatch(setText(''));
    this.store.dispatch(setValue(false));

  };


};


export class ValidEmail extends ValidINput {

  constructor(store, value) {
    super(store, value);

    this.regeexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  };


  checkRegexp() {

    return this.value.search(this.regeexp) !== -1;

  };

};

export class ValidPassword extends ValidINput {

  constructor(store, value) {
    super(store, value);

    this.regeexp = /^[A-Za-z0-9\s]{8,}$/;
  };


  checkRegexp() {

    return this.value.search(this.regeexp) !== -1;

  };

};

export class ValidPhone extends ValidINput {

  constructor(store, value) {
    super(store, value);

    this.regeexp = /^\+79[0-9]{9}$/;
  };


  checkRegexp() {

    return this.value.search(this.regeexp) !== -1;

  };

};

export class ValidName extends ValidINput {

  constructor(store, value) {
    super(store, value);

    this.regeexp = /^[A-Za-zА-Яа-яЁё\s]{3,}$/;
  };


  checkRegexp() {

    return this.value.search(this.regeexp) !== -1;

  };

};

export class ValidSurame extends ValidINput {

  constructor(store, value) {
    super(store, value);

    this.regeexp = /^[A-Za-zА-Яа-яЁё\s]{3,}$/;
  };


  checkRegexp() {

    return this.value.search(this.regeexp) !== -1;

  };

};

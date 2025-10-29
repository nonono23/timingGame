if(!Tonyu.load)Tonyu.load=(_,f)=>f();
Tonyu.load({"compiler":{"namespace":"user","defaultSuperClass":"kernel.Actor","dependingProjects":[{"namespace":"kernel"}]},"run":{"mainClass":"user.Main","bootClass":"kernel.Boot","globals":{"$defaultFPS":60,"$imageSmoothingDisabled":true,"$soundLoadAndDecode":false}},"plugins":{},"kernelEditable":false,"language":"tonyu","version":1740040693405}, ()=>{
Tonyu.klass.define({
  fullName: 'user.Bullet',
  shortName: 'Bullet',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Bullet_main() {
        var _this=this;
        
        _this.num=0;
        Tonyu.globals.$timeFrame=0;
        while (_this.y>0) {
          Tonyu.checkLoop();
          _this.t=Tonyu.globals.$timeFrame%6;
          if (_this.t==0&&_this.num<9) {
            _this.num++;
            
          }
          ;
          
          _this.print(_this.num);
          _this.y=_this.y-6;
          Tonyu.globals.$timeFrame++;
          _this.update();
          
        }
        _this.die();
      },
      fiber$main :function* _trc_Bullet_f_main(_thread) {
        var _this=this;
        
        _this.num=0;
        Tonyu.globals.$timeFrame=0;
        while (_this.y>0) {
          yield null;
          _this.t=Tonyu.globals.$timeFrame%6;
          if (_this.t==0&&_this.num<9) {
            _this.num++;
            
          }
          ;
          
          _this.print(_this.num);
          _this.y=_this.y-6;
          Tonyu.globals.$timeFrame++;
          (yield* _this.fiber$update(_thread));
          
        }
        _this.die();
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{"num":{},"t":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Enemy',
  shortName: 'Enemy',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Enemy_main() {
        var _this=this;
        
        _this.x=_this.x;
        _this.y=_this.y;
        while (true) {
          Tonyu.checkLoop();
          _this.x+=2;
          _this.b=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.b) {
            _this.b.die();
            _this.die();
            
          }
          _this.update();
          
        }
      },
      fiber$main :function* _trc_Enemy_f_main(_thread) {
        var _this=this;
        
        _this.x=_this.x;
        _this.y=_this.y;
        while (true) {
          yield null;
          _this.x+=2;
          _this.b=_this.crashTo(Tonyu.classes.user.Bullet);
          if (_this.b) {
            _this.b.die();
            _this.die();
            
          }
          (yield* _this.fiber$update(_thread));
          
        }
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{"b":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Main',
  shortName: 'Main',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Main_main() {
        var _this=this;
        
        Tonyu.globals.$Screen.resize(640,480);
        new Tonyu.classes.user.Player({x: 200,y: 430,p: 27});
        _this.c=0;
        while (true) {
          Tonyu.checkLoop();
          if (_this.c%250000==0) {
            new Tonyu.classes.user.Enemy({x: 0,y: _this.rnd(20,150),p: 26});
            
          }
          _this.c++;
          
        }
      },
      fiber$main :function* _trc_Main_f_main(_thread) {
        var _this=this;
        
        Tonyu.globals.$Screen.resize(640,480);
        new Tonyu.classes.user.Player({x: 200,y: 430,p: 27});
        _this.c=0;
        while (true) {
          yield null;
          if (_this.c%250000==0) {
            new Tonyu.classes.user.Enemy({x: 0,y: _this.rnd(20,150),p: 26});
            
          }
          _this.c++;
          
        }
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{"c":{}}}
});
Tonyu.klass.define({
  fullName: 'user.Player',
  shortName: 'Player',
  namespace: 'user',
  superclass: Tonyu.classes.kernel.Actor,
  includes: [],
  methods: function (__superClass) {
    return {
      main :function _trc_Player_main() {
        var _this=this;
        
        while (true) {
          Tonyu.checkLoop();
          if (_this.getkey("a")>0) {
            _this.x-=4.5;
          }
          if (_this.getkey("d")>0) {
            _this.x+=4.5;
          }
          if (_this.x>460) {
            _this.x=460;
            
          }
          if (_this.x<10) {
            _this.x=10;
            
          }
          if (_this.getkey("space")==1) {
            new Tonyu.classes.user.Bullet({x: _this.x,y: _this.y,p: 25});
            
          }
          _this.update();
          
        }
      },
      fiber$main :function* _trc_Player_f_main(_thread) {
        var _this=this;
        
        while (true) {
          yield null;
          if (_this.getkey("a")>0) {
            _this.x-=4.5;
          }
          if (_this.getkey("d")>0) {
            _this.x+=4.5;
          }
          if (_this.x>460) {
            _this.x=460;
            
          }
          if (_this.x<10) {
            _this.x=10;
            
          }
          if (_this.getkey("space")==1) {
            new Tonyu.classes.user.Bullet({x: _this.x,y: _this.y,p: 25});
            
          }
          (yield* _this.fiber$update(_thread));
          
        }
        
      },
      __dummy: false
    };
  },
  decls: {"methods":{"main":{"nowait":false,"isMain":true,"vtype":{"params":[],"returnValue":null}}},"fields":{}}
});

});

//# sourceMappingURL=concat.js.map
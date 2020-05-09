const express     = require("express");
const app  = express();
const   bodyParser  = require("body-parser");
const indexRoutes = require("./routes/index");
const passport = require('passport')


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
    secret: "lorem ipsum",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.user = req.user;
   res.locals.success = req.flash('success');
   res.locals.error = req.flash('error');
   next();
});

app.use("/", indexRoutes);


app.listen(3000, ()=> {
    console.log(' app is wokring on port 3000')
})
var userModel = [
    {
        "user": {
            "foreign_id": "some-unique-id", // user's uuid
            "email": "bob@bob.com"
        }
    }
]

var eventModel = [
    {
        "game": {
            "foreign_id": "some-unique-id",
            "user_id": "user-foreign-id", // user's uuid
            "shortDesc": "this is important",
            "event_type": "Game"
        }
    }
]

var events = [
    {
        "item_id": "3",
        "item_type": "Panel",
        "start_at": '2014-02-09T16:00:11.114Z',
        "duration": null,
        "location": null,
        "name": 'Vampires Amongst Us',
        "max_users": -1,
        "current_users": 0,
        "image_url": 'assets/images/samples/ConTessa_d6_shell_pile_blue.png',
        'short_desc': 'Cupcake ipsum dolor sit amet unerdwear.com macaroon liquorice. Pudding caramels chupa chups lemon drops chocolate unerdwear.com caramels. Topping fruitcake tiramisu brownie wafer cupcake caramels I love candy canes.',
        'maturity': 'Everyone',
        "owner": {
            "id": 407,
            "name": "user 406",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": "2",
        "item_type": "Panel",
        "start_at": '2014-02-08T12:00:11.114Z',
        "duration": 180,
        "location": null,
        "name": 'Zombies Are Chasing Us!',
        "max_users": -1,
        "current_users": 0,
        "image_url": 'assets/images/samples/glowdec2_green.png',
        "short_desc": 'Cupcake ipsum dolor sit amet dessert gummies. Cupcake pudding I love apple pie gummies toffee cookie sweet. Biscuit soufflé I love I love marshmallow bonbon.',
        'maturity': 'Teen',
        "owner": {
            "id": 405,
            "name": "user 404",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": null,
        "item_type": "Game",
        "start_at": '2014-02-08T10:00:11.114Z',
        "duration": null,
        "location": null,
        "name": "Knights and Dragons",
        "max_users": 4,
        "current_users": 1,
        "image_url": 'assets/images/samples/d10_multis_alien_abduction.png',
        "short_desc": 'Cupcake ipsum dolor sit. Amet halvah candy canes macaroon soufflé biscuit toffee I love. Fruitcake applicake jelly soufflé chocolate cake oat cake gummies jujubes apple pie.',
        'maturity': 'Mature 17+',
        "owner": {
            "id": 406,
            "name": "user 405",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": null,
        "item_type": "Game",
        "start_at": '2014-02-07T09:00:11.114Z',
        "duration": 120,
        "location": null,
        "name": "Bleak Fantasy Stuff",
        "max_users": 6,
        "current_users": 1,
        "image_url": 'assets/images/samples/knight_fight.png',
        "short_desc": 'Cupcake ipsum dolor sit amet gummies cheesecake pastry I love. Cake I love pie I love cake. Wafer I love wafer I love. Muffin cheesecake I love sweet marshmallow powder.',
        'maturity': 'Everyone',
        "owner": {
            "id": 404,
            "name": "user 403",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": "3",
        "item_type": "Panel",
        "start_at": '2014-02-09T16:00:11.114Z',
        "duration": null,
        "location": null,
        "name": 'Vampires Amongst Us',
        "max_users": -1,
        "current_users": 0,
        "image_url": 'assets/images/samples/d10_scatter.png',
        'short_desc': 'Cupcake ipsum dolor sit amet unerdwear.com macaroon liquorice. Pudding caramels chupa chups lemon drops chocolate unerdwear.com caramels. Topping fruitcake tiramisu brownie wafer cupcake caramels I love candy canes.',
        'maturity': 'Everyone',
        "owner": {
            "id": 407,
            "name": "user 406",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": "2",
        "item_type": "Panel",
        "start_at": '2014-02-08T12:00:11.114Z',
        "duration": 180,
        "location": null,
        "name": 'Zombies Are Chasing Us!',
        "max_users": -1,
        "current_users": 0,
        "image_url": 'assets/images/samples/set_green.png',
        "short_desc": 'Cupcake ipsum dolor sit amet dessert gummies. Cupcake pudding I love apple pie gummies toffee cookie sweet. Biscuit soufflé I love I love marshmallow bonbon.',
        'maturity': 'Everyone',
        "owner": {
            "id": 405,
            "name": "user 404",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": null,
        "item_type": "Game",
        "start_at": '2014-02-08T10:00:11.114Z',
        "duration": null,
        "location": null,
        "name": "Knights and Dragons",
        "max_users": 7,
        "current_users": 1,
        "image_url": 'assets/images/samples/ConTessa_d6_shell_pile_blue.png',
        "short_desc": 'Cupcake ipsum dolor sit. Amet halvah candy canes macaroon soufflé biscuit toffee I love. Fruitcake applicake jelly soufflé chocolate cake oat cake gummies jujubes apple pie.',
        'maturity': 'Mature 17+',
        "owner": {
            "id": 406,
            "name": "user 405",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    },
    {
        "item_id": null,
        "item_type": "Game",
        "start_at": '2014-02-07T09:00:11.114Z',
        "duration": 120,
        "location": null,
        "name": "Bleak Fantasy Stuff",
        "max_users": 4,
        "current_users": 1,
        "image_url": 'assets/images/samples/d6s_purples.jpg',
        "short_desc": 'Cupcake ipsum dolor sit amet gummies cheesecake pastry I love. Cake I love pie I love cake. Wafer I love wafer I love. Muffin cheesecake I love sweet marshmallow powder.',
        'maturity': 'Everyone',
        "owner": {
            "id": 404,
            "name": "user 403",
            "last_activity": null,
            "image_url": null,
            "title_id": null,
            "timezone": "Eastern Time (US & Canada)",
            "title": {
            }
        }
    }
]



 var gamesModel = [
    {
        "id": 4,
        "name": "D&D and Pretzels",
        "start_time": "2014-02-07T19:29:37.117Z",
        "end_time": "2014-02-07T19:29:37.118Z",
        "status": "upcoming",
        "status_id": 1,
        "reminder": null,
        "event_type": "Game",
        "short_desc": "A game about bashing goblins on the head and taking their stuff.",
        "system": "D&D",
        "current_players": 5,
        "max_players": 6,
        "maturity_rating": "Teen",
        "tk_url": "http://..."
    },
    {
        "id": 5,
        "name": "Panel on Stuff",
        "start_time": "2015-10-28T19:29:37.117Z",
        "end_time": "2015-10-29T19:29:37.118Z",
        "status": "upcoming",
        "status_id": 1,
        "reminder": null,
        "event_type": "Panel",
        "short_desc": "We're going to talk about stuff with some people.",
        "system": null,
        "current_players": null,
        "max_players": null,
        "maturity_rating": null,
        "tk_url": "http:..."
    },
     {
         "id": 6,
         "name": "A Night in Utter TERROR",
         "start_time": "2013-02-08T20:00:00.117Z",
         "end_time": "2013-02-08T23:00:00.118Z",
         "status": "upcoming",
         "status_id": 1,
         "reminder": null,
         "event_type": "Game",
         "short_desc": "Get ready to run!",
         "system": "Monsterhearts",
         "current_players": 2,
         "max_players": 6,
         "maturity_rating": "Adult",
         "tk_url": "http:..."
     }
]

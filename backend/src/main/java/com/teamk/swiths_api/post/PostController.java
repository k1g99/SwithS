package com.teamk.swiths_api.post;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/post")
public class PostController {

    @GetMapping()
    public String Hello(){
        return "dsss";
    }

    // @RequestMapping(method = RequestMethod.POST, path = "/postRequest")
    // public SearchVO postRequest(@RequestBody SearchVO searchVo){
    //     return searchVo;
    // }

    // @PostMapping(value = "/postMapping")
    // public SearchVO postMapping(@RequestBody SearchVO searchVo){
    //     return searchVo;
    // }

}
